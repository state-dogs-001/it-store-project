<template>
  <div>
    <!-- Table user order -->
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <thead>
          <tr class="bg-dark text-light">
            <th scope="col" colspan="8">
              <h5>คำรายงานจากผู้ใช้งานเว็บไซต์</h5>
            </th>
          </tr>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">วันที่สั่งซื้อ</th>
            <th scope="col">คำสั่งซื้อ</th>
            <th scope="col">จำนวน</th>
            <th scope="col">ราคา ฿</th>
            <th scope="col">ชื่อผู้สั่งซื้อ</th>
            <th scope="col">เบอร์โทรติดต่อผู้สั่งซื้อ</th>
            <th scope="col">ที่อยู่ของผู้สั่งซื้อ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(read, index) in userOrdersSlice" :key="index">
            <td>{{ index + 1 + calIndex }}</td>
            <td width="200px">{{ read.date.toDate().toDateString() }}</td>
            <td width="200px" style="text-transform: capitalize">
              {{ read.name_product }}
            </td>
            <td>{{ read.number_product }}</td>
            <td>{{ read.sum_price }}</td>
            <td width="200px">{{ read.user_name }}</td>
            <td width="210px">{{ read.user_tel[0] }}</td>
            <td width="200px">{{ read.user_location[0] }}</td>
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
            v-for="index in Math.ceil(userOrders.length / perPage)"
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
    ...mapGetters(["userOrders"]),

    userOrdersSlice: function () {
      let start = (this.page - 1) * this.perPage,
        end = start + this.perPage;
      return this.userOrders.slice(start, end);
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
    // Call function get data
    this.getUserOrders();
  },
  methods: {
    // Get data function
    ...mapActions(["getUserOrders"]),

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
      if (this.page < Math.ceil(this.userOrders.length / this.perPage)) {
        this.page += 1;
      }
    },
  },
};
</script>

<style></style>
