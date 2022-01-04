<template>
  <div>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>
          <div v-for="index in 3" :key="index">
            <CardComp />
          </div>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>
          <div v-for="index in 3" :key="index">
            <CardComp />
          </div>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 3">
        <b-card-text>
          <div v-for="index in 3" :key="index">
            <CardComp />
          </div>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import CardComp from "./CardComponent.vue";
export default {
  components: {
    CardComp,
  },
};
</script>

<style></style>
