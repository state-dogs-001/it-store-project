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
        <!-- User Setting -->
        <div v-for="item in links" :key="item.name">
          <b-dropdown-item :to="item.link">
            <span>{{ item.name }}</span>
          </b-dropdown-item>
        </div>
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
// Import mapActios from vuex
import { mapActions } from "vuex";

export default {
  data() {
    return {
      links: [
        { icon: " ", name: "ตั้งค่าโปรไฟล์", link: "/user" },
        { icon: " ", name: "รายงานปัญหา", link: "/report" },
      ],
    };
  },
  computed: {
    user: function () {
      return this.$store.state.Auth.user;
    },
    status_user: function () {
      return this.$store.state.Auth.authIsReady;
    },
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
