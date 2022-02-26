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
        <p>Error, update locations not successfully</p>
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
        class="mt-5 card-update-location"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>อัปเดตข้อมูลที่อยู่</h2>
        </template>
        <b-form @submit.stop.prevent="update">
          <b-row>
            <div class="box">
              <b-col lg="12">
                <label for="more_location">
                  บ้านเลขที่ ซอย หมู่ ถนน ชื่ออพาร์ทเม้นท์
                </label>
                <input
                  type="text"
                  id="more_location"
                  v-model="more_location"
                  required
                  class="form-control auto-location"
                />
              </b-col>
              <b-col lg="12">
                <!-- ตำบล/แขวง -->
                <addressinput-subdistrict
                  class="auto-location"
                  v-model="subdistrict"
                  required
                />
              </b-col>
              <b-col lg="12">
                <!-- อำเภอ/เขต -->
                <addressinput-district
                  class="auto-location"
                  v-model="district"
                  required
                />
              </b-col>
              <b-col lg="12">
                <!-- จังหวัด -->
                <addressinput-province
                  class="auto-location"
                  v-model="province"
                  required
                />
              </b-col>
              <b-col lg="12">
                <!-- รหัสไปรษณีย์ -->
                <addressinput-zipcode
                  class="auto-location"
                  v-model="zipcode"
                  required
                />
              </b-col>
              <b-col lg="12" class="text-right mt-3 link-color">
                <router-link to="/user">กลับไปหน้าตั้งค่าโปรไฟล์</router-link>
              </b-col>
            </div>
            <b-col lg="12" class="text-center mt-5">
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
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
      more_location: "",

      error: null,

      // Alert Countdown Attributes
      dismissSecs: 10,
      dismissCountDown: 0,
      showSuccessAlert: false, // for success alert
    };
  },
  methods: {
    ...mapActions(["updateLocation"]),
    async update() {
      try {
        const location = {
          user_subdistrict: this.subdistrict,
          user_district: this.district,
          user_province: this.province,
          user_zipcode: this.zipcode,
          user_more_location: this.more_location,
        };
        await this.updateLocation(location);
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
.card-update-location {
  border: none;
}
.box {
  margin: 0 auto;
  float: none;
}
.box .auto-location {
  width: 40rem;
}
.box .auto-location input[type="text"] {
  border-radius: 4px;
}
@media (max-width: 770px) {
  .box .auto-location {
    width: auto;
  }
}
.link-color a {
  color: black;
}
.link-color a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
</style>
