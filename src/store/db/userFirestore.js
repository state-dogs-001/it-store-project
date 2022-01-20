import { auth } from "../../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

// Import firebase firestore
import {
  doc,
  addDoc,
  collection,
  Timestamp,
  setDoc,
  getDoc,
} from "firebase/firestore";

const state = {
  userTelNumber: [],
  userLocation: [],
  updateTelStatus: false,
  updateLocationStatus: false,
  userReportStatus: false,
};

const mutations = {
  setUpdateTelStatus(state, status) {
    state.updateTelStatus = status;
    console.log("Update Tel ", state.updateTelStatus);
  },
  setUserTel(state, data) {
    state.userTelNumber = data;
  },
  setUpdateLocationStatus(state, status) {
    state.updateLocationStatus = status;
    console.log("Update Location ", state.updateLocationStatus);
  },
  setUserLocation(state, data) {
    state.userLocation = data;
  },
  setUserReportStatus(state, status) {
    state.userReportStatus = status;
    console.log("Report ", state.userReportStatus);
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
  updateLocation({ commit }, location) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ref = doc(db, "itmarket_user_location", user.email);
        setDoc(ref, location);
        commit("setUpdateLocationStatus", true);
      }
    });
  },

  // Get user tel number
  getUserLocation({ commit }) {
    let data = [];
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const ref = doc(db, "itmarket_user_location", user.email);
        getDoc(ref).then((d) => {
          if (d.exists()) {
            data.push({ ...d.data() });
            commit("setUserLocation", data);
          } else {
            commit("setUserLocation", (data = []));
          }
        });
      }
    });
  },

  // User Report
  userReport({ commit }, report) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addDoc(collection(db, "itmarket_user_report"), {
          user_email: user.email,
          user_report: report,
          date_report: Timestamp.now(),
        }).then((res) => {
          if (res) {
            commit("setUserReportStatus", true);
          } else {
            commit("setUserReportStatus", false);
          }
        });
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
