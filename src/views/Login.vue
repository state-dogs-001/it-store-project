<template>
  <div class="login">
    <LoginComp />
  </div>
</template>

<script>
import LoginComp from "../components/authDesign/LoginComponent.vue";
export default {
  name: "Login",
  components: {
    LoginComp,
  },
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == true) {
      this.$router.push("/home");
    }
  },
};
</script>
