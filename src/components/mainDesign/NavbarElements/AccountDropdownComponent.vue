<template>
  <div>
    <b-nav-item-dropdown class="ml-3 my-2 my-sm-0" right>
      <template #button-content>
        <b-icon icon="person" />
      </template>
      <!-- if user don't sign-in -->
      <template v-if="!status_user">
        <b-dropdown-item to="/login">
          <b-button variant="success" size="sm">
            <b-icon icon="box-arrow-in-right" /> เข้าสู่ระบบ
          </b-button>
        </b-dropdown-item>
        <b-dropdown-item to="/Register">
          <b-button variant="primary" size="sm">
            <b-icon icon="person-plus" /> สมัครสมาชิก
          </b-button>
        </b-dropdown-item>
      </template>
      <!-- if user sign-in -->
      <template v-if="status_user">
        <b-dropdown-item disabled>
          <span class="text-center">ยินดีตอนรับ {{ user.email }}</span>
        </b-dropdown-item>
        <hr />
        <template v-if="!status_admin">
          <!-- User Setting -->
          <div v-for="item in links" :key="item.name">
            <b-dropdown-item :to="item.link">
              <p>{{ item.name }} <b-icon :icon="item.icon" /></p>
            </b-dropdown-item>
          </div>
        </template>
        <!-- Admin Setting -->
        <template v-if="status_admin">
          <b-dropdown-item to="/dashboard">
            <p>หน้าจัดการสินค้า</p>
          </b-dropdown-item>
        </template>
        <hr />
        <b-dropdown-item @click="signOut">
          <b-button variant="danger" size="sm">
            <b-icon icon="box-arrow-left" /> ออกจากระบบ
          </b-button>
        </b-dropdown-item>
      </template>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
// Import firebase auth
import { auth } from "../../../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// Import mapActios from vuex
import { mapActions, mapGetters } from "vuex";

export default {
  beforeCreate() {
    // Change admin login
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email == "admin@itmarket.com") {
          this.status_admin = true;
        } else {
          this.status_admin = false;
        }
      }
    });
  },
  data() {
    return {
      status_admin: false,

      links: [
        { icon: "gear", name: "ตั้งค่าโปรไฟล์", link: "/user" },
        {
          icon: "clock-history",
          name: "ประวัติการสั่งซื้อ",
          link: "/buy_history",
        },
        { icon: "bug-fill", name: "รายงานปัญหา", link: "/report" },
      ],
    };
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["status_user"]),
  },
  methods: {
    // Sign-out
    ...mapActions(["signout"]),
    async signOut() {
      await this.signout();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
