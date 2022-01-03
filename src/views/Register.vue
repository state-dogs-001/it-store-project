<template>
  <div class="register">
    <RegComp />
  </div>
</template>

<script>
import RegComp from "../components/authDesign/RegisterComponent.vue";
export default {
  components: {
    RegComp,
  },
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == true) {
      this.$router.push("/home");
    }
  },
};
</script>

<style></style>
