<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped">
      <thead>
        <tr class="bg-dark text-light">
          <th scope="col" colspan="3">
            <h5>ตั้งค่าการเข้าสู่ระบบ</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>รหัสผ่าน</td>
          <td>••••••••••••</td>
          <td class="text-right">
            <router-link to="/user/change_password">
              เปลี่ยนรหัสผ่าน >
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
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
