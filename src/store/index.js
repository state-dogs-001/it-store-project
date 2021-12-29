import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Auth from "./auth/firebaseAuth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
  plugins: [createPersistedState()],
});
