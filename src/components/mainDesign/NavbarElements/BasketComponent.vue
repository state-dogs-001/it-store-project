<template>
  <div>
    <b-nav-item v-if="status_user" to="/user/basket">
      <b-icon icon="basket3" />
      <b-badge class="ml-2" variant="danger">มีสินค้าในตะกร้า</b-badge>
    </b-nav-item>
  </div>
</template>

<script>
export default {
  computed: {
    status_user: function () {
      return this.$store.state.Auth.authIsReady;
    },
  },
};
</script>

<style></style>
