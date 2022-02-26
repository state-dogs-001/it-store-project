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
        <p>Error, send report failed</p>
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
        ส่งแบบฟอร์มสำเร็จ...
      </b-alert>

      <b-card
        class="mt-5 card-report"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>รายงานปัญหาเว็บไซต์</h2>
        </template>
        <b-row>
          <form @submit.stop.prevent="send">
            <b-col lg="12">
              <textarea
                id="reportText"
                v-model="reportText"
                rows="5"
                cols="110"
                required
                class="form-control"
                placeholder="คุณต้องการรายงานปัญหาอะไร?"
              ></textarea>
            </b-col>
            <b-col lg="12" class="text-center mt-5 mb-2">
              <input type="reset" value="ยกเลิก" class="btn btn-danger mr-3" />
              <input
                type="submit"
                value="รายงานปัญหา"
                class="btn btn-success"
              />
            </b-col>
          </form>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      reportText: null,

      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    ...mapActions(["userReport"]),
    async send() {
      try {
        await this.userReport(this.reportText);
        // Set Statatus of showSuccessAlert to show alert
        this.showSuccessAlert = true;
        // Set time to redirect to user page in 2 sec.
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
.card-report {
  border: none;
}
</style>
