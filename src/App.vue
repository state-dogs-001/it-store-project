<template>
  <div id="app">
    <!-- Theme -->
    <div class="image-blurred"></div>
    <NavBar />
    <div class="render-page">
      <router-view />
    </div>
    <FooterComp />
    <GoTop
      :size="60"
      bg-color="rgb(255, 43, 96)"
      ripple-bg="rgba(0, 0, 0, 0.5)"
    />
  </div>
</template>

<script>
// Import Component Go to top
import GoTop from "@inotom/vue-go-top";

// Components
import NavBar from "./components/mainDesign/NavbarComponent.vue";
import FooterComp from "./components/mainDesign/FooterComponent.vue";

export default {
  components: {
    GoTop,
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
.image-blurred::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  pointer-events: none;
}
.image-blurred {
  position: fixed;
  width: 100%;
  height: 100%;
  background: no-repeat center center;
  background-image: url("https://i.pinimg.com/originals/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg");
  z-index: -100;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
