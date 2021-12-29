// import firebase config
import "../../configs/firebase.js";

// Import firebase auth
import {
  getAuth,
  createUserWithEmailAndPassword, // Register
  signInWithEmailAndPassword, // Login
  signOut,
} from "firebase/auth";

// init firebase auth
const auth = getAuth();

const state = {
  user: null,
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
    } else {
      throw new Error("Something wrong, singin doesn't exit");
    }
  },
  // Signout
  async signout(context) {
    console.log("Signout Action");
    await signOut(auth);
    context.commit("setUser", null);
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
    console.log("User state ", state.user);
  },
};

export default {
  state,
  actions,
  mutations,
};
