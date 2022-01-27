<template>
  <div>
    <b-row>
      <b-col lg="12">
        <h4>หมวดหมู่: โทรศัพท์มือถือ</h4>
      </b-col>
      <b-col class="my-4" lg="4" sm="12" v-for="i in 12" :key="i">
        <CardComp title="Mobile Product" />
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
    ...mapGetters(["mobiles"]),

    // filter mobiles brand
    appleMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("apple");
      });
    },
    samsungMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("samsung");
      });
    },
    oppoMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("oppo");
      });
    },
    xiaomiMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("xiaomi");
      });
    },
  },
  created() {
    this.getMobiles();
  },
  methods: {
    ...mapActions(["getMobiles"]),
  },
};
</script>

<style></style>
