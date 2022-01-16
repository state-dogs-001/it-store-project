<template>
  <div>
    <b-container>
      <b-card
        class="mt-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h1>ตั้งค่าโปรไฟล์</h1>
        </template>
        <p>
          ในนี้จะแสดงข้อมูลของผู้ใช้ และจะมีลิงค์สำหรับการแก้ไขข้อมูล เช่น
          อัปเดต Password อัปเดตชื่อ อัปเดตที่อยู่และเบอร์โทร
        </p>
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
</style>
