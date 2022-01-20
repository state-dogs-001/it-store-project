import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Auth from "./auth/firebaseAuth.js";
import Database from "./db/firebaseFirestore.js";
import UserDB from "./db/userFirestore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Database,
    UserDB,
  },
  plugins: [createPersistedState()],
});
