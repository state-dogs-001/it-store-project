<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
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
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Search box -->
          <b-nav-form @submit.prevent="searchClick">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              v-model="searchItem"
              placeholder="คุณต้องการค้นหาอะไร"
            ></b-form-input>
            <!-- Button of search box -->
            <b-button
              variant="success"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              ค้นหา <b-icon icon="search" />
            </b-button>
          </b-nav-form>

          <!-- Login and Register -->
          <b-nav-item-dropdown class="ml-3 my-2 my-sm-0" right>
            <template #button-content>
              <b-icon icon="person" />
            </template>
            <!-- if user don't sign-in -->
            <template>
              <b-dropdown-item to="/login">
                <b-button variant="success" size="sm">
                  <b-icon icon="box-arrow-in-right" /> เข้าสู่ระบบ
                </b-button>
              </b-dropdown-item>
              <b-dropdown-item to="/Register">
                <b-button variant="primary" size="sm">
                  <b-icon icon="person-plus" /> สมัครสมาชิก
                </b-button>
              </b-dropdown-item>
            </template>
            <!-- if user sign-in -->
            <template>
              <b-dropdown-item @click="signOut">
                <b-button variant="danger" size="sm">
                  <b-icon icon="box-arrow-left" /> ออกจากระบบ
                </b-button>
              </b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
          <!-- Basket -->
          <b-nav-item>
            <b-icon icon="basket3" />
            <b-badge class="ml-2" variant="danger">มีสินค้าในตะกร้า</b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchItem: null,
    };
  },
  methods: {
    searchClick() {
      if (this.searchItem) {
        // Use window.location.replace bcuz it'll reload page once before visit search page.
        window.location.replace(`/search/${this.searchItem}`);
        this.searchItem = null;
      }
    },

    ...mapActions(["signout"]),
    // Sign-out
    async signOut() {
      await this.signout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.dropdown .dropdown-item:active {
  background-color: #8b8b8b2d;
}
</style>
