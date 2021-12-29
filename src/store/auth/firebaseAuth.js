import store from "../index";

// Import Firebase config
import "../../configs/firebase.js";

// Import firebase auth
import {
  getAuth,
  createUserWithEmailAndPassword, // Register
  signInWithEmailAndPassword, // Login
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// init firebase auth
const auth = getAuth();

const state = {
  user: null,
  authIsReady: false,
};

const actions = {
  // Regiister
  async signup(context, { email, password }) {
    console.log("Singup Action");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
    } else {
      throw new Error("Something wrong, singup doesn't exit");
    }
  },

  // Signin
  async signin(context, { email, password }) {
    console.log("Signin Action");
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
      // Set user status
      store.commit("setAuthIsReady", true);
    } else {
      throw new Error("Something wrong, singin doesn't exit");
    }
  },
  // Signout
  async signout(context) {
    console.log("Signout Action");
    await signOut(auth);
    context.commit("setUser", null);
    // Set user status
    store.commit("setAuthIsReady", false);
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
    console.log("User state ", state.user);
  },
  setAuthIsReady(state, payload) {
    state.authIsReady = payload;
    console.log("User status", state.authIsReady);
  },
};

const unsub = onAuthStateChanged(auth, (user) => {
  if (!user) {
    store.commit("setAuthIsReady", false);
  } else {
    store.commit("setAuthIsReady", true);
    store.commit("setUser", user);
  }
  unsub();
});

export default {
  state,
  actions,
  mutations,
};
