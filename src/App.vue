<template>
  <div id="app">
    <NavBar />
    <div class="render-page">
      <router-view />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import NavBar from "./components/mainDesign/NavbarComponent.vue";
import FooterComp from "./components/mainDesign/FooterComponent.vue";

export default {
  components: {
    NavBar,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap");
#app {
  font-family: "Prompt", sans-serif;
}
.render-page {
  min-height: 90vh;
}
</style>
