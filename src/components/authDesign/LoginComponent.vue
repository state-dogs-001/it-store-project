<template>
  <div id="login-page">
    <b-container>
      <!-- Alert when progress failed -->
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="danger"
        class="mt-2"
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
        เข้าสู่ระบบสำเร็จ กรุณารอสักครู่...
      </b-alert>

      <!-- Card form login -->
      <b-card class="card my-3" header-tag="header">
        <template #header>
          <h1><b-icon icon="box-arrow-in-right" /> เข้าสู่ระบบ</h1>
        </template>
        <!-- Form login -->
        <b-form @submit.stop.prevent="submit">
          <b-row>
            <b-col lg="3" sm="12" class="mt-2"> E-mail </b-col>
            <b-col lg="9" sm="12" class="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
                class="form-control"
              />
            </b-col>
            <b-col lg="3" sm="12" class="my-2"> Password </b-col>
            <b-col lg="9" sm="12" class="my-2">
              <input
                type="password"
                id="password"
                name="password"
                v-model="password"
                required
                class="form-control"
              />
            </b-col>
            <!-- Link to register page -->
            <b-col lg="12" class="text-right">
              <router-link to="/register">
                <span>หากยังไม่ได้สมัครสมาชิก?</span>
              </router-link>
            </b-col>
            <!-- Link to reset password page -->
            <b-col lg="12" class="text-right">
              <router-link to="/reset_password">
                <span>หากลืมรหัสผ่าน?</span>
              </router-link>
            </b-col>
            <b-col lg="12" class="my-3 text-center">
              <input type="reset" value="ยกเลิก" class="btn btn-danger mr-2" />
              <input type="submit" value="ยืนยัน" class="btn btn-success" />
            </b-col>
          </b-row>
        </b-form>

        <!-- Another way to login -->
        <b-row>
          <b-col lg="12">
            <div class="separator">
              <span>หรือ</span>
            </div>
          </b-col>
          <b-col sm="12" lg="6" class="my-2 text-center">
            <b-button variant="primary" block>
              <span>Facebook </span>
              <b-icon icon="facebook" />
            </b-button>
          </b-col>
          <b-col sm="12" lg="6" class="my-2 text-center">
            <b-button variant="danger" block>
              <span>Google </span>
              <b-icon icon="google" />
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// Import action from vuex
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // Login Attributes
      email: null,
      password: null,
      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    // Login
    ...mapActions(["signin"]),
    async submit() {
      try {
        await this.signin({
          email: this.email,
          password: this.password,
        });
        // Set Statatus of showSuccessAlert to show alert
        this.showSuccessAlert = true;
        // Set time to redirect to home page 2 sec.
        setTimeout(() => {
          this.$router.push("/home");
        }, 2000);
      } catch (err) {
        // Show alert when login failed
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
.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid rgb(206, 200, 200);
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
.separator span {
  opacity: 70%;
}
</style>
