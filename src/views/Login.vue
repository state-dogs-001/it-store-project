<template>
  <div class="login">
    <h1>Login Test</h1>
    <br />
    <form @submit.prevent="submit()">
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        placeholder="Press e-mail here"
      />
      <br />
      <br />
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Press password here"
      />
      <br />
      <br />
      <router-link to="/reset_password">
        <p>Forgot password?</p>
      </router-link>
      <br />
      <input type="submit" value="submit" />
      <div v-if="this.error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
// Import action from vuex
import { mapActions } from "vuex";

export default {
  name: "Login",
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
    ...mapActions(["signin"]),
    async submit() {
      try {
        await this.signin({
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
