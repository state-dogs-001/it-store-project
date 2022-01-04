<template>
  <div>
    <b-container>
      <b-card class="card mt-4 mb-5" no-body>
        <TabComp />
      </b-card>
    </b-container>
  </div>
</template>

<script>
import TabComp from "./TabComponent.vue";
export default {
  components: {
    TabComp,
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
