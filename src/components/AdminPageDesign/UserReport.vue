<template>
  <div>
    <!-- Table user report -->
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <thead>
          <tr class="bg-dark text-light">
            <th scope="col" colspan="4">
              <h5>คำรายงานจากผู้ใช้งานเว็บไซต์</h5>
            </th>
          </tr>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">เวลา</th>
            <th scope="col">E-mail</th>
            <th scope="col">รายละเอียดปัญหา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(read, index) in userReportSlice" :key="index">
            <th scope="row">{{ index + 1 + calIndex }}</th>
            <td>{{ read.date_report.toDate().toDateString() }}</td>
            <td>{{ read.user_email }}</td>
            <td>
              {{ read.user_report }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-5">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" @click="prePage">ก่อนหน้า</button>
          </li>
          <li
            class="page-item"
            v-for="index in Math.ceil(userReport.length / perPage)"
            :key="index"
          >
            <button class="page-link" @click="onPage(index)">
              {{ index }}
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click="nextPage">ถัดไป</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userReport"]),

    userReportSlice: function () {
      let start = (this.page - 1) * this.perPage,
        end = start + this.perPage;
      return this.userReport.slice(start, end);
    },

    // Use for calculate with index in table
    calIndex: function () {
      let number = (this.page - 1) * this.perPage;
      return number;
    },
  },
  data() {
    return {
      // Use for pagination
      page: 1,
      perPage: 10,
    };
  },
  created() {
    // Get data user report
    this.getUserReport();
  },
  methods: {
    ...mapActions(["getUserReport"]),

    // Pagination functions
    onPage(i) {
      this.page = i;
    },

    prePage() {
      if (this.page > 1) {
        this.page -= 1;
      }
    },

    nextPage() {
      if (this.page < Math.ceil(this.userReport.length / this.perPage)) {
        this.page += 1;
      }
    },
  },
};
</script>

<style></style>
