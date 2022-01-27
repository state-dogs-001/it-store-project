// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
  limit,
} from "firebase/firestore";

const state = {
  allProducts: [],
  mobileLimit: [],
  laptopLimit: [],
  computerLimit: [],
};

const mutations = {
  setProducts(state, data) {
    state.allProducts = data;
  },

  setMobileLimit(state, data) {
    state.mobileLimit = data;
  },

  setLaptopLimit(state, data) {
    state.laptopLimit = data;
  },

  setComputerLimit(state, data) {
    state.computerLimit = data;
  },
};

const actions = {
  // get all data
  async getProducts({ commit }) {
    let data = [];
    const q = query(collection(db, "itmarket_products"), orderBy("date"));
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
    commit("setProducts", data);
  },

  // get mobile product limit
  async getMobileLimit({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "mobile"),
      orderBy("date"),
      limit(5)
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
    commit("setMobileLimit", data);
  },

  // get laptop product limit
  async getLaptopLimit({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "laptop"),
      orderBy("date"),
      limit(5)
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
    commit("setLaptopLimit", data);
  },

  // get computer product limit
  async getComputerLimit({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "computer"),
      orderBy("date"),
      limit(5)
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
          console.log(data);
        }
      });
    });
    commit("setComputerLimit", data);
  },
};

export default {
  state,
  mutations,
  actions,
};
