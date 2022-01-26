// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const state = {
  allProducts: [],
};

const mutations = {
  setProducts(state, data) {
    state.allProducts = data;
  },
};

const actions = {
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
};

export default {
  state,
  mutations,
  actions,
};
