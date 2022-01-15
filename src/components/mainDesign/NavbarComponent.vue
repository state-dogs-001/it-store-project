<template>
  <div>
    <b-navbar
      class="nav-shadow"
      toggleable="lg"
      type="dark"
      variant="transparent"
    >
      <b-navbar-brand to="/home">
        <span class="font-weight-light"> IT </span>
        <span class="font-weight-bold">
          Market
          <b-icon icon="cart2" animation="cylon" />
        </span>
      </b-navbar-brand>

      <!-- Show if this page responsive to sm -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/products">เลือกซื้อสินค้า</b-nav-item>
          <b-nav-item to="/about">เกี่ยวกับ</b-nav-item>
          <b-nav-item to="/contact">ติดต่อ</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="my-2 my-sm-2">
            <!-- Search box -->
            <SearchComp />
          </div>

          <div class="my-2 my-sm-0">
            <!-- Account setting Login Register Logout etc. -->
            <AccountComp />
          </div>

          <div class="my-2 my-sm-0">
            <!-- Basket -->
            <BasketComp />
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// Import elements component
// Search Box
import SearchComp from "./NavbarElements/SearchComponent.vue";
// Account setting Login Register Logout etc.
import AccountComp from "./NavbarElements/AccountDropdownComponent.vue";
// Basket
import BasketComp from "./NavbarElements/BasketComponent.vue";

export default {
  components: {
    SearchComp,
    AccountComp,
    BasketComp,
  },
};
</script>

<style>
.dropdown .dropdown-item:active {
  background-color: #8b8b8b2d;
}
.nav-shadow {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}
</style>
