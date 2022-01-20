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
          <h2>อัปเดตข้อมูลที่อยู่</h2>
        </template>
        <b-form @submit.stop.prevent="update">
          <b-row>
            <div class="box">
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
        };
        await this.updateLocation(location);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.card {
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
</style>
