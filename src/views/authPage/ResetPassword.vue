<template>
  <div>
    <ResetPasswordComp />
  </div>
</template>

<script>
import ResetPasswordComp from "../../components/authDesign/ResetPasswordComponent.vue";

export default {
  name: "ResetPassword",
  components: {
    ResetPasswordComp,
  },
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == true) {
      this.$router.push("/products");
    }
  },
};
</script>

<style></style>
