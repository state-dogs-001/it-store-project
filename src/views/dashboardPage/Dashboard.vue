<template>
  <div>
    <b-container>
      <b-card
        class="card-dashboard mt-5 mb-4"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
        no-body
      >
        <template #header>
          <h2>DASHBOARD</h2>
        </template>

        <!-- Left position is menu setting -->
        <!-- Right position is show -->
        <b-tabs card pills>
          <b-tab title="จัดการสินค้า" active>
            <b-card-text class="card-text-size">
              <ProductManage />
            </b-card-text>
          </b-tab>

          <b-tab title="คำสั่งซื้อ">
            <b-card-text class="card-text-size">
              <UserOrder />
            </b-card-text>
          </b-tab>

          <b-tab title="การรายงานจากลูกค้า">
            <b-card-text class="card-text-size">
              <UserReport />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import ProductManage from "../../components/AdminPageDesign/ProductManagement.vue";
import UserOrder from "../../components/AdminPageDesign/UserOrder.vue";
import UserReport from "../../components/AdminPageDesign/UserReport.vue";

export default {
  components: {
    ProductManage,
    UserOrder,
    UserReport,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.card-dashboard {
  border: none;
}
.nav-pills a {
  color: black;
}
.card-text-size {
  min-height: 20rem;
}
@media (max-width: 770px) {
  .card-text-size {
    min-height: 10rem;
  }
}
.nav-pills .nav-link:not(.active) {
  background-color: none;
}
.nav-pills .nav-link.active {
  background-color: rgb(255, 43, 96);
}
</style>
