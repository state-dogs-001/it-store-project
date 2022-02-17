<template>
  <div>
    <b-nav-item v-if="status_user && !status_admin" to="/user/basket">
      <b-icon icon="basket3" />
      <b-badge
        class="ml-2"
        variant="danger"
        v-if="productsInBasket.length >= 1"
      >
        มีสินค้าในตะกร้า
      </b-badge>
    </b-nav-item>
  </div>
</template>

<script>
// Import firebase auth
import { auth } from "../../../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// Import mapActios from vuex
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["status_user"]),

    ...mapGetters(["productsInBasket"]),
  },
  data() {
    return {
      status_admin: false,
    };
  },
  beforeCreate() {
    // Change admin login
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email == "admin@itmarket.com") {
          this.status_admin = true;
        } else {
          this.status_admin = false;
        }
      }
    });
  },
  created() {
    // Get product in basket
    this.getProductInBasket();
  },
  methods: {
    // Fucntion get product in basket
    ...mapActions(["getProductInBasket"]),
  },
};
</script>

<style></style>
