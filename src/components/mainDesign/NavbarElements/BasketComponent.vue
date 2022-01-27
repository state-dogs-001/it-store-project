<template>
  <div>
    <b-nav-item v-if="status_user" to="/user/basket">
      <b-icon icon="basket3" />
      <b-badge class="ml-2" variant="danger">มีสินค้าในตะกร้า</b-badge>
    </b-nav-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["status_user"]),
  },
};
</script>

<style></style>
