<template>
  <div>
    <b-row>
      <b-col lg="12">
        <h4>หมวดหมู่: คอมพิวเตอร์เซ็ต</h4>
      </b-col>
      <b-col class="my-4" lg="4" sm="12" v-for="i in 12" :key="i">
        <CardComp title="Computer Product" />
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
    ...mapGetters(["computers"]),

    // filter computers brand
    acerComputers: function () {
      return this.computers.filter((products) => {
        return products.brandProduct.match("acer");
      });
    },
    dellComputers: function () {
      return this.computers.filter((products) => {
        return products.brandProduct.match("dell");
      });
    },
    hpComputers: function () {
      return this.computers.filter((products) => {
        return products.brandProduct.match("hp");
      });
    },
  },
  created() {
    this.getComputers();
  },
  methods: {
    ...mapActions(["getComputers"]),
  },
};
</script>

<style></style>
