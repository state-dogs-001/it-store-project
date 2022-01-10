<template>
  <div>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text class="mt-4">
          <b-row>
            <b-col lg="4" sm="12" v-for="index in 12" :key="index">
              <CardComp />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text class="mt-4">
          <b-row>
            <b-col lg="4" sm="12" v-for="index in 12" :key="index">
              <CardComp />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 3">
        <b-card-text class="mt-4">
          <b-row>
            <b-col lg="4" sm="12" v-for="index in 12" :key="index">
              <CardComp />
            </b-col>
          </b-row>
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
