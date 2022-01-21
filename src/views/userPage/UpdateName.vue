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
        อัปเดตสำเร็จ กรุณารอสักครู่...
      </b-alert>

      <b-card
        class="mt-5 card-update-name"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>อัปเดตชื่อผู้ใช้งาน</h2>
        </template>
        <b-form @submit.stop.prevent="update">
          <b-row>
            <b-col sm="12" lg="2" class="my-2"> Name </b-col>
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
            <b-col sm="12" lg="5" class="mt-2 mb-3">
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
            <b-col lg="12" class="text-right link-color">
              <router-link to="/user"> กลับไปหน้าตั้งค่าโปรไฟล์ </router-link>
            </b-col>
            <b-col lg="12" class="mt-5 mb-2 text-center">
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
      firstName: null,
      lastName: null,

      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    ...mapActions(["updateDisplayName"]),
    async update() {
      const name = this.firstName + " " + this.lastName;
      try {
        await this.updateDisplayName(name);
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
    },

    // Count Down Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style>
.card-update-name {
  border: none;
}
.link-color a {
  color: black;
}
.link-color a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
</style>
