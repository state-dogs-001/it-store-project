<template>
  <div class="about">
    <h1>Login Test</h1>
    <form @submit.prevent="submit()">
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        placeholder="Press e-mail here"
      />
      <br />
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Press password here"
      />
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
