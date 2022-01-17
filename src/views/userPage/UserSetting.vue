<template>
  <div>
    <b-container>
      <b-card
        class="my-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
        no-body
      >
        <template #header>
          <h1>ตั้งค่าโปรไฟล์</h1>
        </template>

        <!-- Left position is menu setting -->
        <!-- Right position is show -->
        <b-tabs card pills vertical>
          <b-tab title="หน้าโปรไฟล์" active>
            <b-card-text>แก้ไขโปรไฟล์</b-card-text>
          </b-tab>

          <b-tab title="ข้อมูลที่อยู่">
            <b-card-text>ที่อยู่ และ เบอร์โทร</b-card-text>
          </b-tab>

          <b-tab title="ความปลอดภัย">
            <b-card-text>อัปเดต Password</b-card-text>
          </b-tab>
        </b-tabs>

        <router-view />
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  border: none;
}
.nav-pills a {
  color: black;
}
.nav-pills {
  min-height: 30rem;
}
.nav-pills .nav-link:not(.active) {
  background-color: none;
}
.nav-pills .nav-link.active {
  background-color: rgb(255, 43, 96);
}
</style>
