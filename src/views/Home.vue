<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <button @click="logout()">Logout</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(["signout"]),
    async logout() {
      await this.signout();
    },
  },
};
</script>
