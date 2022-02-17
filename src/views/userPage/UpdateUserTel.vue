<template>
  <div>
    <b-container style="max-width: 750px">
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
        class="card-update-tel mt-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>อัปเดตเบอร์โทร</h2>
        </template>
        <b-form @submit.stop.prevent="update">
          <b-row>
            <b-col sm="12" lg="2" class="mt-3 mb-2">เบอร์โทรศัพท์</b-col>
            <b-col sm="12" lg="10">
              <input
                type="tel"
                v-model="telphone"
                id="telphone"
                placeholder="กรุณากรอกเบอร์โทรติดต่อ"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                maxlength="12"
                class="form-control my-3"
                required
              />
            </b-col>
            <b-col lg="12" class="text-right link-color">
              <router-link to="/user">
                <span>กลับไปหน้าตั้งค่าโปรไฟล์</span>
              </router-link>
            </b-col>
            <b-col lg="12" class="text-center my-3">
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
      telphone: null,

      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  mounted() {
    const isNumericInput = (event) => {
      const key = event.keyCode;
      return (
        (key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
      );
    };

    const isModifierKey = (event) => {
      const key = event.keyCode;
      return (
        event.shiftKey === true ||
        key === 35 ||
        key === 36 || // Allow Shift, Home, End
        key === 8 ||
        key === 9 ||
        key === 13 ||
        key === 46 || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        // Allow Ctrl/Command + A,C,V,X,Z
        ((event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
      );
    };

    const enforceFormat = (event) => {
      // Input must be of a valid number format or a modifier key, and not longer than ten digits
      if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
      }
    };

    const formatToPhone = (event) => {
      if (isModifierKey(event)) {
        return;
      }

      // I am lazy and don't like to type things more than once
      const target = event.target;
      const input = event.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
      const zip = input.substring(0, 3);
      const middle = input.substring(3, 6);
      const last = input.substring(6, 10);

      if (input.length > 6) {
        target.value = `${zip}-${middle}-${last}`;
      } else if (input.length > 3) {
        target.value = `${zip}-${middle}`;
      } else if (input.length > 0) {
        target.value = `${zip}`;
      }
    };

    const inputElement = document.getElementById("telphone");
    inputElement.addEventListener("keydown", enforceFormat);
    inputElement.addEventListener("keyup", formatToPhone);
  },
  methods: {
    ...mapActions(["updateTelNumber"]),
    async update() {
      try {
        await this.updateTelNumber(this.telphone);
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
.card-update-tel {
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
