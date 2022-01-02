<template>
  <div class="home">
    <h1>Home page</h1>
    <template v-if="status_user">
      User: {{ user.email }}
      <br />
      User status: {{ status }}
      <br />
      Verify: {{ user.emailVerified }}
      <br />
      <button v-if="user" @click="logout">Logout</button>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      status: null,
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
  created() {
    if (this.status_user == true) {
      this.status = "Logged in";
    }
  },
  methods: {
    // Logout
    ...mapActions(["signout"]),
    async logout() {
      await this.signout();
      location.reload;
      this.$router.push("/login");
    },
  },
};
</script>
