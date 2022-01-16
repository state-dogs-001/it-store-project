<template>
  <div>
    <b-tabs card>
      <b-tab title="Moblie Phone" active>
        <b-card-text class="mt-4">
          <b-row>
            <b-col lg="4" sm="12" v-for="index in 12" :key="index">
              <CardComp />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Notebook">
        <b-card-text class="mt-4">
          <b-row>
            <b-col lg="4" sm="12" v-for="index in 12" :key="index">
              <CardComp />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Computer Set">
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
