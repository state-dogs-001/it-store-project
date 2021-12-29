import Vue from "vue";
import Vuex from "vuex";
import Auth from "./auth/firebaseAuth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
});
