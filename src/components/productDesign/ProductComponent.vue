<template>
  <div>
    <b-container>
      <b-row>
        <!-- User Display name -->
        <b-col sm="12" lg="12" class="my-5 header">
          <h1>
            <span class="font-weight-lighter">IT</span>
            <span class="font-weight-bold">Market</span>
          </h1>
          <span> ยินดีตอนรับ {{ userName }} </span>
        </b-col>
        <!-- Products -->
        <b-col sm="12" lg="12">
          <b-card
            class="card mb-5"
            header-tag="header"
            header-bg-variant="dark"
            header-text-variant="white"
            no-body
          >
            <template #header>
              <h1>เลือกซื้อสินค้า</h1>
            </template>
            <TabComp />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TabComp from "./TabComponent.vue";
export default {
  components: {
    TabComp,
  },
  props: {
    userName: String,
  },
};
</script>

<style>
.card {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.jumbotron-background {
  background: none;
}
.header h1 span {
  color: white;
  font-size: 60px;
}
.header span {
  color: white;
  font-size: 20px;
}
@media (max-width: 767px) {
  .header {
    text-align: center;
  }
}
</style>
