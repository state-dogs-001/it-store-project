// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const state = {
  addProductStatus: false,
  updateProductStatus: false,
  deleteProductStatus: false,
  userReport: [],
};

const mutations = {
  setAddStatus(state, status) {
    state.addProductStatus = status;
    console.log("Add status ", state.addProductStatus);
  },
  setUpdateStatus(state, status) {
    state.updateProductStatus = status;
    console.log("Update status ", state.updateProductStatus);
  },
  setDeleteStatus(state, status) {
    state.deleteProductStatus = status;
    console.log("Delete status ", state.deleteProductStatus);
  },
  setUserReport(state, data) {
    state.userReport = data;
  },
};

const actions = {
  // Add product
  async addProducts({ commit }, data) {
    await addDoc(collection(db, "itmarket_products"), data);
    commit("setAddStatus", true);
    setTimeout(() => {
      commit("setAddStatus", false);
    }, 2000);
  },

  // Update product
  async updateProducts({ commit }, { id, data }) {
    const ref = doc(db, "itmarket_products", id);
    await updateDoc(ref, data);
    commit("setUpdateStatus", true);
    setTimeout(() => {
      commit("setUpdateStatus", false);
    }, 2000);
  },

  // Delete Product
  async deleteProducts({ commit }, id) {
    const ref = doc(db, "itmarket_products", id);
    await deleteDoc(ref);
    commit("setDeleteStatus", true);
    setTimeout(() => {
      commit("setDeleteStatus", false);
    }, 2000);
  },

  // Get user report
  async getUserReport({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_user_report"),
      orderBy("date_report")
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
    commit("setUserReport", data);
  },
};

const getters = {
  userReport: (state) => state.userReport,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
