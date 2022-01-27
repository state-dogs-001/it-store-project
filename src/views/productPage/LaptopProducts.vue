<template>
  <div>
    <b-row>
      <b-col lg="12">
        <h4>หมวดหมู่: แล็ปท็อป</h4>
      </b-col>
      <b-col class="my-4" lg="4" sm="12" v-for="i in 12" :key="i">
        <CardComp title="Laptop Product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardComp from "../../components/productDesign/CardComponent.vue";

export default {
  components: {
    CardComp,
  },
  computed: {
    ...mapGetters(["laptops"]),

    // filter laptops barnd
    acerLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("acer");
      });
    },
    asusLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("asus");
      });
    },
    dellLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("dell");
      });
    },
    hpLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("hp");
      });
    },
  },
  created() {
    this.getLaptops();
  },
  methods: {
    ...mapActions(["getLaptops"]),
  },
};
</script>

<style></style>
