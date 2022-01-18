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
          <td>+66</td>
          <td class="text-right">
            <a href="/user/update_tel">อัปเดตเบอร์โทรศัพท์ ></a>
          </td>
        </tr>
        <tr>
          <td>วันที่ใช้บริการ</td>
          <td colspan="2">xxxx-xx-xx</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    user: function () {
      return this.$store.state.Auth.user;
    },
    status_user: function () {
      return this.$store.state.Auth.authIsReady;
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
