import { auth } from "../../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

// Import firebase firestore
import { doc, setDoc, getDoc } from "firebase/firestore";

const state = {
  userTelNumber: [],
  updateTelStatus: false,
};

const mutations = {
  setUpdateTelStatus(state, status) {
    state.updateTelStatus = status;
    console.log("Update Tel ", state.updateTelStatus);
  },
  setUserTel(state, data) {
    state.userTelNumber = data;
  },
};

const actions = {
  // Update User Tel Number
  updateTelNumber({ commit }, tel) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ref = doc(db, "itmarket_user_tel", user.email);
        setDoc(ref, { tel_number: tel });
        commit("setUpdateTelStatus", true);
      }
    });
  },

  // Get user tel number
  getUserTelNumber({ commit }) {
    let data = [];
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ref = doc(db, "itmarket_user_tel", user.email);
        getDoc(ref).then((d) => {
          if (d.exists()) {
            data.push({ ...d.data() });
            commit("setUserTel", data);
          } else {
            commit("setUserTel", (data = []));
          }
        });
      }
    });
  },

  // Update user location
};

export default {
  state,
  mutations,
  actions,
};
