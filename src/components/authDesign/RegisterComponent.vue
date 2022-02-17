<template>
  <div id="register-page">
    <b-container style="max-width: 1000px">
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
      <b-card
        class="card-reg mt-5 mb-2"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
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
                pattern="^[A-Za-z]+$|^[ก-๏\s]+$"
                maxlength="16"
                required
                class="form-control"
                placeholder="กรุณากรอกชื่อ ภาษาไทยหรืออังกฤษเท่านั้น"
              />
            </b-col>
            <!-- Last Name -->
            <b-col sm="12" lg="5" class="mt-2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                v-model="lastName"
                pattern="^[A-Za-z]+$|^[ก-๏\s]+$"
                maxlength="16"
                required
                class="form-control"
                placeholder="กรุณากรอกนามสกุล ภาษาไทยหรืออังกฤษเท่านั้น"
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
                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                class="form-control"
                placeholder="กรุณากรอกอีเมลล์เพื่อสมัคร"
              />
            </b-col>
            <!-- Password -->
            <b-col lg="2" sm="12" class="mt-2"> Password </b-col>
            <b-col lg="10" sm="12" class="mt-2">
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
            <!-- Password Confirm -->
            <b-col lg="2" sm="12" class="mt-2">ยืนยัน Password </b-col>
            <b-col lg="10" sm="12" class="mt-2">
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
            <!-- Link to login page -->
            <b-col lg="12" class="text-right my-2 link-color">
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
      password_confirm: null,

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
      // If password and confirm password match
      if (this.password == this.password_confirm) {
        try {
          await this.signup({
            email: this.email.toLowerCase(),
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
      }
      // If password and confirm password not match
      else {
        // Show alert when login failed
        this.dismissCountDown = this.dismissSecs;
        this.error = "Password not match, Try check.";
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
.card-reg {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.link-color a {
  color: black;
}
.link-color a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
</style>
