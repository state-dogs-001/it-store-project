<template>
  <div class="home">
    <template v-if="status_user">
      <ProductComp :userName="user.displayName" />
    </template>
  </div>
</template>

<script>
import ProductComp from "../../components/productDesign/ProductComponent.vue";

export default {
  name: "Home",
  components: {
    ProductComp,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    user: function () {
      return this.$store.state.Auth.user;
    },
    status_user: function () {
      return this.$store.state.Auth.authIsReady;
    },
  },
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == false) {
      this.$router.push("/login");
    }
  },
};
</script>
