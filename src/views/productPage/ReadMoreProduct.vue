<template>
  <div>
    <b-container>
      <b-card
        class="card-single-product my-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template #header>
          <h2>รายละเอียดสินค้า</h2>
        </template>
        <b-row v-for="read in product" :key="read.nameProduct">
          <b-col lg="4" sm="12">
            <div class="image-product">
              <b-img fluid :src="read.imageProduct" />
            </div>
          </b-col>
          <b-col lg="8" sm="12">
            <b-row>
              <b-col lg="12" class="mt-5 render-product">
                <h3>{{ read.nameProduct }}</h3>
                <h5>
                  ราคา
                  {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                  บาท
                </h5>
                <br />
                <p>
                  {{ read.description }}
                </p>
              </b-col>
              <b-col lg="12" class="my-3">
                <b-button variant="primary" block @click="openModal(read)">
                  หยิบใส่ตะกร้า
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-container>

    <!-- Modal Add Product To Basket -->
    <b-modal
      v-model="modalAddProduct"
      centered
      hide-footer
      no-close-on-backdrop
    >
      <!-- Modal header -->
      <template #modal-header="{ close }">
        <h3>เพิ่มสินค้าลงตะกร้า</h3>
        <button
          @click="
            close();
            clrearData();
          "
          class="btn btn-danger"
        >
          <i class="fas fa-times"></i>
        </button>
      </template>
      <b-row>
        <!-- Product name -->
        <b-col lg="12">
          <h5 style="text-transform: uppercase">{{ nameProduct }}</h5>
          <p>
            ราคา {{ priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} บาท
          </p>
        </b-col>

        <!-- Image -->
        <b-col lg="12" class="d-flex justify-content-center">
          <b-img :src="imageProduct" width="100%" />
        </b-col>

        <!-- Number of product -->
        <b-col lg="12" class="text-center mt-5">
          <p>จำนวน</p>
          <b-form-spinbutton v-model="numberProduct" inline />
          <hr />
        </b-col>

        <!-- Button -->
        <b-col lg="12">
          <b-button variant="success" block @click="addToBasket">
            เพิ่มลงตะกร้า
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { Timestamp } from "firebase/firestore";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    // Get user info
    ...mapGetters(["user"]),

    // Get products
    ...mapGetters(["productsInStock"]),

    nameFromPath: function () {
      return this.$route.query.id;
    },

    product: function () {
      return this.productsInStock.filter((products) => {
        return products.id.match(this.nameFromPath);
      });
    },
  },
  data() {
    return {
      // Modal Status
      modalAddProduct: false,

      // Set data before add to basket
      nameProduct: "",
      priceProduct: "",
      imageProduct: "",
      numberProduct: 1,
    };
  },
  created() {
    this.getProductsInStock();
  },
  methods: {
    // get products in stock
    ...mapActions(["getProductsInStock"]),

    // Openmodal
    openModal(product) {
      // Set modal status
      this.modalAddProduct = true;

      // Set Data
      this.nameProduct = product.nameProduct;
      this.priceProduct = product.priceProduct;
      this.imageProduct = product.imageProduct;
    },
    // Close Modal
    clrearData() {
      this.nameProduct = "";
      this.priceProduct = "";
      this.imageProduct = "";
      this.numberProduct = 1;
    },

    // Add product to basket
    ...mapActions(["userAddProduct"]),
    async addToBasket() {
      const data = {
        user_email: this.user.email,
        name_product: this.nameProduct,
        price_product: Number(this.priceProduct),
        img_product: this.imageProduct,
        number_product: this.numberProduct,
        date: Timestamp.now(),
      };
      try {
        await this.userAddProduct(data);

        // Close modal
        this.modalAddProduct = false;

        //then alert and reflesh page
        alert("เพิ่มสินค้าลงตะกร้าสำเร็จ");
        window.location.reload();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style>
.card-single-product {
  border: none;
}
.image-product {
  overflow: hidden;
}
.image-product img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.image-product img:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.render-product h3 {
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(255, 43, 96);
}
.render-product h5 {
  letter-spacing: 1.5px;
}
</style>
