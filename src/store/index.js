import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Auth from "./auth/firebaseAuth.js";
import AdminDB from "./db/adminFirestore.js";
import productDB from "./db/productFirebase.js";
import UserDB from "./db/userFirestore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    AdminDB,
    productDB,
    UserDB,
  },
  plugins: [createPersistedState()],
});
