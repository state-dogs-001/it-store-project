// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";

const state = {
  allProducts: [],
  productsInStcock: [],
  mobiles: [],
  laptops: [],
  computers: [],
};

const mutations = {
  setProducts(state, data) {
    state.allProducts = data;
  },

  setProductsInStock(state, data) {
    state.productsInStcock = data;
  },

  setMobiles(state, data) {
    state.mobiles = data;
  },

  setLaptops(state, data) {
    state.laptops = data;
  },

  setComputers(state, data) {
    state.computers = data;
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

  // get all products data in stock
  async getProductsInStock({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      orderBy("date")
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
    commit("setProductsInStock", data);
  },

  // get mobiles
  async getMobiles({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "mobile"),
      orderBy("date")
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
    commit("setMobiles", data);
  },

  // get laptops
  async getLaptops({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "laptop"),
      orderBy("date")
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
    commit("setLaptops", data);
  },

  // get computers
  async getComputers({ commit }) {
    let data = [];
    const q = query(
      collection(db, "itmarket_products"),
      where("productStatus", "==", "inStock"),
      where("typeProduct", "==", "computer"),
      orderBy("date")
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
    commit("setComputers", data);
  },
};

const getters = {
  products: (state) => state.allProducts,
  productsInStock: (state) => state.productsInStcock,
  mobiles: (state) => state.mobiles,
  laptops: (state) => state.laptops,
  computers: (state) => state.computers,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
