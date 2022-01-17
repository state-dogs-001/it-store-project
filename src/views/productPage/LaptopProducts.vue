<template>
  <div>
    <b-row>
      <b-col lg="12">
        <h4>หมวดหมู่: แลปท็อป</h4>
      </b-col>
      <b-col class="my-4" lg="4" sm="12" v-for="i in 12" :key="i">
        <CardComp />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardComp from "../../components/productDesign/CardComponent.vue";

export default {
  components: {
    CardComp,
  },
};
</script>

<style></style>
