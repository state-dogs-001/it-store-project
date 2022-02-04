<template>
  <div>
    <b-container>
      <b-card
        class="my-5 card-search"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template #header>
          <h1>ค้นหา: {{ searchText }}</h1>
        </template>

        <b-row>
          <b-col>
            <h5
              style="
                color: rgb(255, 43, 96);
                font-weight: bold;
                letter-spacing: 1.5px;
              "
            >
              ผลการค้นหา
            </h5>
            <br />
            <template v-if="filterData.length <= 0">
              <p>Sorry, this {{ searchText }} is not found</p>
            </template>
            <template v-else>
              <b-row>
                <b-col
                  lg="4"
                  sm="6"
                  class="my-3"
                  v-for="read in filterData"
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
                      {{
                        read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      บาท
                    </b-card-text>

                    <!-- Button -->
                    <b-col lg="12" class="text-center">
                      <b-button
                        variant="primary"
                        class="mr-2"
                        block
                        @click="getProductID(read.id)"
                      >
                        ดูสินค้า
                      </b-button>
                    </b-col>
                  </b-card>
                </b-col>
              </b-row>
            </template>
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
    // Search Text
    searchText: function () {
      return this.$route.params.name;
    },

    // Data before search (not show)
    ...mapGetters(["productsInStock"]),

    // Filter data from Search
    filterData: function () {
      return this.productsInStock.filter((products) => {
        return products.nameProduct.match(this.searchText);
      });
    },
  },
  created() {
    // get data
    this.getProductsInStock();
  },
  methods: {
    ...mapActions(["getProductsInStock"]),

    // Go to product more
    getProductID(id) {
      this.$router.push(`/view/product/?id=${id}`);
    },
  },
};
</script>

<style>
.card-search {
  border: none;
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
</style>
