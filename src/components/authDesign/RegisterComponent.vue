<template>
  <div id="register-page">
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
        สมัครสมาชิกสำเร็จ กรุณารอสักครู่...
      </b-alert>

      <!-- Card form register -->
      <b-card class="card mt-4 mb-2" header-tag="header">
        <template #header>
          <h1><b-icon icon="person-plus" /> สมัครสมาชิก</h1>
        </template>
        <!-- Form register -->
        <b-form @submit.stop.prevent="submit">
          <b-row>
            <!-- User name -->
            <b-col sm="12" lg="2" class="mt-2"> Name </b-col>
            <!-- First name -->
            <b-col sm="12" lg="5" class="mt-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                v-model="firstName"
                required
                class="form-control"
                placeholder="กรุณากรอกชื่อ"
              />
            </b-col>
            <!-- Last Name -->
            <b-col sm="12" lg="5" class="mt-2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                v-model="lastName"
                required
                class="form-control"
                placeholder="กรุณากรอกนามสกุล"
              />
            </b-col>
            <!-- E-mail -->
            <b-col lg="2" sm="12" class="mt-2"> E-mail </b-col>
            <b-col lg="10" sm="12" class="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
                class="form-control"
                placeholder="กรุณากรอกอีเมลล์เพื่อสมัคร"
              />
            </b-col>
            <b-col lg="2" sm="12" class="mt-2"> Password </b-col>
            <b-col lg="10" sm="12" class="my-2">
              <input
                type="password"
                id="password"
                name="password"
                v-model="password"
                required
                class="form-control"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </b-col>
            <!-- Link to login page -->
            <b-col lg="12" class="text-right my-2">
              <router-link to="/login">
                <span>หากเป็นสมาชิกอยู่แล้ว</span>
              </router-link>
            </b-col>
            <b-col lg="12" class="my-3 text-center">
              <input type="reset" value="ยกเลิก" class="btn btn-danger mr-2" />
              <input type="submit" value="ยืนยัน" class="btn btn-success" />
            </b-col>
          </b-row>
        </b-form>
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
      // Register Attribute
      firstName: null,
      lastName: null,
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
    // Register function
    ...mapActions(["signup"]),
    async submit() {
      try {
        await this.signup({
          email: this.email,
          password: this.password,
          name: this.firstName + " " + this.lastName,
        });
        // Set Statatus of showSuccessAlert to show alert
        this.showSuccessAlert = true;
        // Set time to redirect to home page 2 sec.
        setTimeout(() => {
          this.$router.push("/products");
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
