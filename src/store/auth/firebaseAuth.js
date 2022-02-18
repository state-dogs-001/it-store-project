import store from "../index";

// Import getAuth with auth from Firebase config
import { auth } from "../../configs/firebase.js";

// Import firebase auth
import {
  setPersistence, // Firebase Auth State Persistance
  browserSessionPersistence, // Terminate State If Close Browser
  createUserWithEmailAndPassword, // Register
  updateProfile, // Use for update display name
  signInWithEmailAndPassword, // Login
  onAuthStateChanged, // Status of user
  sendPasswordResetEmail, // Reset Password
  updatePassword, // Update Password
  // Use for google signin
  signInWithPopup,
  GoogleAuthProvider,
  // Use for facebook login
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

const state = {
  user: null,
  authIsReady: false,
  sendPasswordEmailStatus: false,
  updatePasswordStatus: false,
  updateNameStatus: false,
};

const actions = {
  // Register
  async signup(context, { email, password, name }) {
    // Set State Persistance
    await setPersistence(auth, browserSessionPersistence);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
      // Set user status
      store.commit("setAuthIsReady", true);
      // After Sign-up success then update display name
      await updateProfile(auth.currentUser, { displayName: name });
    } else {
      throw new Error("Something wrong, singup doesn't exit");
    }
  },

  // Signin
  async signin(context, { email, password }) {
    // Set State Persistance
    await setPersistence(auth, browserSessionPersistence);
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
      // Set user status
      store.commit("setAuthIsReady", true);
    } else {
      throw new Error("Something wrong, singin doesn't exit");
    }
  },

  // Signin with google
  async signinWithGoogle(context) {
    // Set provider
    const provider = new GoogleAuthProvider();
    // Set State Persistance
    await setPersistence(auth, browserSessionPersistence);
    const res = await signInWithPopup(auth, provider);
    if (res) {
      context.commit("setUser", res.user);
      // Set user status
      store.commit("setAuthIsReady", true);
    } else {
      throw new Error("Something wrong, singin doesn't exit");
    }
  },

  // Singin with facebook
  async signinWithFacebook(context) {
    // set provider
    const provider = new FacebookAuthProvider();
    // Set State Persistance
    await setPersistence(auth, browserSessionPersistence);
    const res = await signInWithPopup(auth, provider);
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
    await signOut(auth);
    context.commit("setUser", null);
    // Set user status
    store.commit("setAuthIsReady", false);
  },

  // Reset Password With email
  async resetpassword(context, { email }) {
    await sendPasswordResetEmail(auth, email);
    context.commit("setSendPasswordEmailStatus", true);
  },

  // Update Password
  async updatepassword(context, password) {
    const user = auth.currentUser;
    await updatePassword(user, password);
    context.commit("setUpdatePasswordStatus", true);
  },

  // Upadete displayName
  async updateDisplayName(context, name) {
    const user = auth.currentUser;
    await updateProfile(user, {
      displayName: name,
    });
    context.commit("setUpdateNameStatus", true);
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setAuthIsReady(state, payload) {
    state.authIsReady = payload;
  },
  setSendPasswordEmailStatus(state, status) {
    state.sendPasswordEmailStatus = status;
  },
  setUpdatePasswordStatus(state, status) {
    state.updatePasswordStatus = status;
  },
  setUpdateNameStatus(state, status) {
    state.updateNameStatus = status;
  },
};

const getters = {
  user: (state) => state.user,
  status_user: (state) => state.authIsReady,
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
  getters,
};
