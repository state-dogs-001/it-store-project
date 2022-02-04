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
              <b-col lg="6" sm="12" class="my-3">
                <b-button variant="primary" block>หยิบใส่ตะกร้า</b-button>
              </b-col>
              <b-col lg="6" sm="12" class="my-3">
                <b-button variant="success" block>สั่งสินค้า</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
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
  created() {
    this.getProductsInStock();
  },
  methods: {
    // get products in stock
    ...mapActions(["getProductsInStock"]),
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
