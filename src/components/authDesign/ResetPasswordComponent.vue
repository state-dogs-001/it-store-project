<template>
  <div>
    <b-container>
      <!-- Alert when progress failed -->
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        class="mt-3"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>{{ error }}</p>
        <b-progress
          variant="danger"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>

      <!-- Alert when success -->
      <b-alert
        v-model="showSuccessAlert"
        variant="success"
        class="mt-3"
        dismissible
      >
        ส่งลิงค์สำหรับแก้ไข Password สำเร็จ
        กรุณาตรวจสอบที่กล่องข้อความของท่าน...
      </b-alert>

      <!-- Card form reset password -->
      <b-card class="card mt-4 mb-4" header-tag="header">
        <template #header>
          <h1><b-icon icon="arrow-clockwise" /> รีเซ็ตรหัสผ่าน</h1>
        </template>
        <!-- Form reset Password -->
        <b-form @submit.stop.prevent="sendEmail">
          <b-row>
            <b-col sm="12" lg="2"> E-mail </b-col>
            <b-col sm="12" lg="10">
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
                class="form-control"
                placeholder="กรุณากรอกอีเมลล์ที่สมัคร"
              />
            </b-col>
            <!-- Login link -->
            <b-col lg="12" class="my-2 text-right">
              <router-link to="/login">กลับไปยังหน้าเข้าสู่ระบบ</router-link>
            </b-col>
            <!-- Button -->
            <b-col class="text-center mt-5">
              <input type="reset" class="btn btn-danger mr-3" value="ยกเลิก" />
              <input type="submit" class="btn btn-success" value="ตกลง" />
            </b-col>
          </b-row>
        </b-form>
      </b-card>

      <!-- Alert warning -->
      <b-alert variant="warning" show class="mb-3 text-center">
        <span>
          หากต้องการจะรีเซ็ต Password
          <br />
          อีเมลล์ที่ใช้สมัครต้องเป็นอีเมลล์ที่มีอยู่จริง เท่านั้น
          <br />
          <br />
          หมายเหตุ: หากไม่เจอลิงค์สำหรับการรีเซ็ต Password
          กรุณาตรวจสอบอีกครั้งที่กล่องข้อความขยะ
        </span>
      </b-alert>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // Reset Password Attribute
      email: null,
      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    ...mapActions(["resetpassword"]),
    // Send message to user email for reset their password.
    async sendEmail() {
      try {
        await this.resetpassword({
          email: this.email,
        });
        // Set Statatus of showSuccessAlert to show alert
        this.showSuccessAlert = true;
      } catch (err) {
        this.dismissCountDown = this.dismissSecs;
        this.error = err.message;
      }
    },
    // Count Down Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
