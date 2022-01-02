import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Firebase config.
import "./configs/firebase.js";

// Bootstrap an BootstrapVue CSS files.
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
