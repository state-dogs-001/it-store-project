<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped">
      <thead>
        <tr class="bg-dark text-light">
          <th scope="col" colspan="3">
            <h5>ข้อมูลบัญชี</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ชื่อผู้ใช้งาน</td>
          <template v-if="status_user">
            <td>{{ user.displayName }}</td>
          </template>
          <td class="text-right">
            <a href="/user/update_name">อัปเดตชื่อ ></a>
          </td>
        </tr>
        <tr>
          <td>อีเมลล์</td>
          <template v-if="status_user">
            <td colspan="2">{{ user.email }}</td>
          </template>
        </tr>
        <tr>
          <td>ที่อยู่</td>
          <td>Thailand</td>
          <td class="text-right">
            <a href="/user/update_location">อัปเดตที่อยู่ ></a>
          </td>
        </tr>
        <tr>
          <td>เบอร์โทรศัพท์</td>
          <template v-if="telNumber.length > 0">
            <td>+66 {{ telNumber[0].tel_number }}</td>
          </template>
          <template v-else>
            <td>
              +66
              <span style="color: rgb(255, 43, 96)"
                >ยังไม่ได้เพิ่มเบอร์โทรติดต่อ</span
              >
            </td>
          </template>
          <td class="text-right">
            <a href="/user/update_tel">อัปเดตเบอร์โทรศัพท์ ></a>
          </td>
        </tr>
        <tr>
          <td>วันที่ใช้บริการ</td>
          <template v-if="user.metadata">
            <td colspan="2">{{ user.metadata.creationTime }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    user: function () {
      return this.$store.state.Auth.user;
    },
    status_user: function () {
      return this.$store.state.Auth.authIsReady;
    },
    telNumber: function () {
      return this.$store.state.UserDB.userTelNumber;
    },
  },
  created() {
    this.getTel();
  },
  methods: {
    ...mapActions(["getUserTelNumber"]),
    async getTel() {
      try {
        await this.getUserTelNumber();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.text-right a {
  color: black;
}
.text-right a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
</style>
