// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const state = {
  addProductStatus: false,
  updateProductStatus: false,
  deleteProductStatus: false,
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
};

export default {
  state,
  mutations,
  actions,
};
