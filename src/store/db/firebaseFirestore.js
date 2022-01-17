//import store from "../index";

// Import db from firebase config to use firestore
import { db } from "../../configs/firebase.js";

// Import firebase firestore
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const state = {
  readStatus: false,
  addStatus: false,
  updateStatus: false,
  removeStatus: false,
  dataArray: [],
};

const mutations = {
  setData(state, data) {
    state.dataArray = data;
  },

  setReadStatus(state, status) {
    state.readStatus = status;
    console.log("Read data: ", status);
  },

  setAddStatus(state, status) {
    state.addStatus = status;
    console.log("Add data: ", status);
  },

  setupdateStatus(state, status) {
    state.updateStatus = status;
    console.log("Update data: ", status);
  },

  setRemoveStatus(state, status) {
    state.removeStatus = status;
    console.log("Remove data: ", status);
  },
};

const actions = {
  // get data from database
  getData({ commit }) {
    let data = [];
    const q = query(collection(db, "test"));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === "modified") {
          // if has something update
        }
        if (change.type === "removed") {
          // if has something remove or delete
        }
      });
    });
    commit("setData", data);
    commit("setReadStatus", true);
  },

  // add data
  async addData({ commit }, text) {
    await addDoc(collection(db, "test"), {
      text: text,
      time: Timestamp.now(),
    });
    commit("setAddStatus", true);
    setTimeout(() => {
      commit("setAddStatus", false);
    }, 3000);
  },

  // upadete data
  async updateData({ commit }, { id, text }) {
    const ref = doc(db, "test", id);
    await updateDoc(ref, {
      text: text,
      time: Timestamp.now(),
    });
    commit("setupdateStatus", true);
    setTimeout(() => {
      commit("setupdateStatus", false);
    }, 3000);
  },

  // Remove data
  async removeData({ commit }, id) {
    await deleteDoc(doc(db, "test", id));
    commit("setRemoveStatus", true);
    setTimeout(() => {
      commit("setRemoveStatus", false);
    }, 3000);
  },
};

export default {
  state,
  mutations,
  actions,
};
