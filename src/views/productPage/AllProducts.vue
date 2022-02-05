<template>
  <div class="all-products">
    <b-row>
      <b-col lg="12" class="list-brannds">
        <h4>หมวดหมู่: สินค้าทั้งหมด</h4>
        <p>
          ประเภท:
          <button class="btn btn-link" @click="toMobile">โทรศัพท์มือถือ</button>
          | <button class="btn btn-link" @click="toLaptop">แล็ปท็อป</button> |
          <button class="btn btn-link" @click="toComputer">
            คอมพิวเตอร์เซ็ต
          </button>
        </p>
      </b-col>

      <!-- Mobile Products -->
      <b-col lg="12" id="mobile">
        <h1 class="mt-4 font-weight-bold text-center">
          โทรศัพท์มือถือ <i class="fas fa-mobile-alt"></i>
        </h1>
        <hr />
      </b-col>

      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in mobileLimit"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา =
            {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} บาท
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button variant="success" @click="openModal(read)">
              หยิบใส่ตะกร้า
            </b-button>
          </b-col>
        </b-card>
      </b-col>

      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/mobiles">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>

      <!-- Laptop Products -->
      <b-col lg="12" id="laptop">
        <h1 class="mt-4 font-weight-bold text-center">
          แล็ปท็อป <i class="fas fa-laptop"></i>
        </h1>
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in laptopLimit"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา =
            {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} บาท
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button variant="success" @click="openModal(read)">
              หยิบใส่ตะกร้า
            </b-button>
          </b-col>
        </b-card>
      </b-col>
      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/laptops">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>

      <!-- Computer Products -->
      <b-col lg="12" id="computer">
        <h1 class="mt-4 font-weight-bold text-center">
          คอมพิวเตอร์เซ็ต <i class="fas fa-desktop"></i>
        </h1>
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in computerLimit"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา =
            {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} บาท
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button variant="success" @click="openModal(read)">
              หยิบใส่ตะกร้า
            </b-button>
          </b-col>
        </b-card>
      </b-col>
      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/computers">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>
    </b-row>

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
    ...mapGetters(["user"]),

    ...mapGetters(["mobiles"]),
    ...mapGetters(["laptops"]),
    ...mapGetters(["computers"]),

    mobileLimit: function () {
      return this.mobiles.slice(0, 5);
    },
    laptopLimit: function () {
      return this.laptops.slice(0, 5);
    },
    computerLimit: function () {
      return this.computers.slice(0, 5);
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
    // get data
    this.getMobiles();
    this.getLaptops();
    this.getComputers();
  },
  methods: {
    // Go to id smooth scrolling
    toMobile() {
      document.querySelector("#mobile").scrollIntoView({
        behavior: "smooth",
      });
    },
    toLaptop() {
      document.querySelector("#laptop").scrollIntoView({
        behavior: "smooth",
      });
    },
    toComputer() {
      document.querySelector("#computer").scrollIntoView({
        behavior: "smooth",
      });
    },

    // Get Data
    ...mapActions(["getMobiles"]),
    ...mapActions(["getLaptops"]),
    ...mapActions(["getComputers"]),

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

    // Go to view product more
    getProductID(id) {
      this.$router.push(`/view/product/?id=${id}`);
    },
  },
};
</script>

<style>
.list-brannds button {
  color: black;
}
.list-brannds button:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}

.card-image {
  border: none;
  margin: 0 auto;
  float: none;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-image .card-title {
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(255, 43, 96);
}
.card-image .card-subtitle {
  text-transform: uppercase;
}
.card-image img {
  margin: 0 auto;
  float: none;
  width: 8rem;
  height: auto;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.card-image img:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

.card-a a {
  color: black;
}
.card-a a:hover {
  text-decoration: none;
}
.card-a .card-more {
  border: none;
  margin: 0 auto;
  float: none;
  width: 18rem;
  height: 20rem;
  overflow: hidden;
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.card-a .card-more:hover {
  background-color: rgb(60, 60, 60);
  color: white;
}
.card-a .card-more h1 {
  margin-top: 80px;
}
</style>
