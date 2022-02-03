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
        เปลี่ยนรหัสผ่านสำเร็จ
      </b-alert>

      <b-card
        class="mt-5 card-change-password"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>เปลี่ยนรหัสผ่าน</h2>
        </template>
        <b-form @submit.stop.prevent="update">
          <b-row>
            <b-col sm="12" lg="2" class="mt-3">New Password</b-col>
            <b-col sm="12" lg="10" class="mt-3">
              <input
                type="password"
                id="password"
                name="password"
                v-model="password"
                minlength="6"
                maxlength="20"
                required
                class="form-control"
                placeholder="กรุณากรอกรหัสผ่าน ขั้นต่ำ 6 ตัวอักษร"
              />
            </b-col>
            <b-col sm="12" lg="2" class="mt-3">Confirm Password</b-col>
            <b-col sm="12" lg="10" class="my-3">
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                v-model="password_confirm"
                required
                class="form-control"
                placeholder="กรุณากรอกรหัสผ่านอีกครั้ง"
              />
            </b-col>
            <b-col lg="12" class="text-right link-color">
              <router-link to="/user"> กลับไปหน้าตั้งค่าโปรไฟล์ </router-link>
            </b-col>
            <b-col lg="12" class="text-center mt-3 mb-2">
              <input type="reset" value="Cancel" class="btn btn-danger mr-3" />
              <input type="submit" value="Update" class="btn btn-success" />
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      password: null,
      password_confirm: null,

      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    ...mapActions(["updatepassword"]),
    async update() {
      if (this.password == this.password_confirm) {
        try {
          await this.updatepassword(this.password);
          // Set Statatus of showSuccessAlert to show alert
          this.showSuccessAlert = true;
          // Set time to redirect to user page in 2 sec.
          setTimeout(() => {
            this.$router.push("/user");
          }, 2000);
        } catch (err) {
          // Show alert when login failed
          this.dismissCountDown = this.dismissSecs;
          this.error = err.message;
        }
      } else {
        this.dismissCountDown = this.dismissSecs;
        this.error = "Password not match";
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
.card-change-password {
  border: none;
}
</style>
