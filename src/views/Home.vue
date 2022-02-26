<template>
  <div class="home">
    <!-- Jumbotron -->
    <b-jumbotron class="jumbotron-background" fluid text-variant="light">
      <template #header>
        <span class="font-weight-lighter">IT</span>
        <span class="font-weight-bold">Market</span>
      </template>

      <template #lead>
        <hr class="my-4" />
        <h3>เว็บไซต์สั่งซื้ออุปกณ์ IT ออนไลน์</h3>
        <p>"สินค้า IT คุณภาพราคาประหยัด"</p>
      </template>

      <b-button class="mt-4" variant="danger" to="/products"
        >คลิ๊กเพื่อดูสินค้า</b-button
      >
    </b-jumbotron>
    <!-- Card -->
    <b-container>
      <b-card class="home-card mb-5">
        <b-row>
          <b-col
            md="6"
            sm="12"
            v-for="read in someProducts"
            :key="read.nameProduct"
          >
            <!-- Card products -->
            <b-card
              no-body
              class="overflow-hidden my-3"
              style="max-width: 540px; border: none"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="read.imageProduct"
                    alt="Image"
                    class="rounded-0 card-image"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body
                    :title="read.nameProduct"
                    style="text-transform: capitalize"
                  >
                    <b-card-text class="truncate">
                      {{ read.description }}
                    </b-card-text>
                    <!-- Link to products pages -->
                    <b-button variant="outline-dark" to="/products/all">
                      View products more
                    </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
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
    // All products in stock
    ...mapGetters(["productsInStock"]),

    // Slice some products to show on home page
    someProducts: function () {
      return this.productsInStock.slice(0, 6);
    },
  },
  created() {
    // use function getProductsInStock()
    this.getProductsInStock();
  },
  methods: {
    // Fumction get products in stock
    ...mapActions(["getProductsInStock"]),
  },
};
</script>

<style>
hr {
  border: 1px solid white;
}
.home {
  width: 100%;
  height: 100%;
}
.jumbotron-background {
  background: none;
}
.home-card {
  border: none;
}
.card-image {
  margin: 0 auto;
  float: none;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.card-image:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}
.truncate {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
