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
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const state = {
  userTelNumber: [],
  userLocation: [],
  updateTelStatus: false,
  updateLocationStatus: false,
  userReportStatus: false,
  userAddProductStatus: false,
  productsInBasket: [],
  buyProductStatus: false,
  deleteProductStatus: false,
  buyHistory: [],
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
  setUserAddProductStatus(state, status) {
    state.userAddProductStatus = status;
    console.log("Add Product ", state.userAddProductStatus);
  },
  setProductsInBasket(state, data) {
    state.productsInBasket = data;
  },
  setBuyProductStatus(state, status) {
    state.buyProductStatus = status;
    console.log("Buy ", state.buyProductStatus);
  },
  setDeleteProductStatus(state, status) {
    state.deleteProductStatus = status;
    console.log("Delete product", state.deleteProductStatus);
  },
  setBuyHistory(state, data) {
    state.buyHistory = data;
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

  // Add product to basket
  async userAddProduct({ commit }, data) {
    const ref = await addDoc(collection(db, "itmarket_user_basket"), data);
    if (ref) {
      commit("setUserAddProductStatus", true);
    }
  },

  // Get products in basket
  getProductInBasket({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let data = [];
        const q = query(
          collection(db, "itmarket_user_basket"),
          where("user_email", "==", user.email),
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
        commit("setProductsInBasket", data);
      }
    });
  },

  // Buy product
  buyProduct({ commit }, { data, id }) {
    addDoc(collection(db, "itmarket_user_orders"), data)
      .then(() => {
        commit("setBuyProductStatus", true);
        alert("สั่งซื้อสำเร็จ");
      })
      .then(() => {
        deleteDoc(doc(db, "itmarket_user_basket", id))
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => console.log(error.message));
  },

  // Delete product in basket
  async deleteProdctInBasket({ commit }, id) {
    await deleteDoc(doc(db, "itmarket_user_basket", id));
    commit("setDeleteProductStatus", true);
  },

  // Get buy history
  getBuyHistory({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let data = [];
        const q = query(
          collection(db, "itmarket_user_orders"),
          where("user_email", "==", user.email),
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
        commit("setBuyHistory", data);
      }
    });
  },
};

const getters = {
  telNumber: (state) => state.userTelNumber,
  location: (state) => state.userLocation,
  productsInBasket: (state) => state.productsInBasket,
  buyHistory: (state) => state.buyHistory,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
