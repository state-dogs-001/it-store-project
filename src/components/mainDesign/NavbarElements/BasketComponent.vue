<template>
  <div>
    <b-nav-item v-if="status_user" to="/user/basket">
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
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["status_user"]),

    ...mapGetters(["productsInBasket"]),
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
