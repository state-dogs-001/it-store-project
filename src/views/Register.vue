<template>
  <div class="register">
    <h1>Register</h1>
    <br />
    <form @submit.prevent="submit">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        required
        placeholder="Press your email"
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        required
        placeholder="Press your password"
      />
      <br />
      <br />
      <input type="submit" value="Submit" style="margin-right: 10px" />
      <input type="reset" value="Cancel" />
    </form>
    <div v-if="error">
      <br />
      <h3>Error</h3>
      <span>this email is already to use</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == true) {
      this.$router.push("/home");
    }
  },
  methods: {
    ...mapActions(["signup"]),
    async submit() {
      try {
        await this.signup({
          email: this.email,
          password: this.password,
        });
        this.$router.push("/home");
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style></style>
