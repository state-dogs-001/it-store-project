<template>
  <div>
    <b-container>
      <b-card
        class="mt-5 card-buy-history"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h1>ประวัติการสั่งซื้อ</h1>
        </template>

        <!-- Not have any order history -->
        <template v-if="buyHistory.length < 1">
          <div class="image-content d-flex justify-content-center text-center">
            <b-row>
              <b-col lg="12" class="title mt-4">
                <h3>ขออภัยคุณไม่ประวัติการสั่งซื้อสินค้า</h3>
              </b-col>
              <b-col lg="12" class="mt-3">
                <b-img
                  src="https://c.tenor.com/AFamU1ZsLCcAAAAM/tontonfriends-sorry.gif"
                />
              </b-col>
            </b-row>
          </div>
        </template>

        <!-- If have product in basket -->
        <template v-else>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">รูปภาพ</th>
                  <th scope="col">ชื่อสินค้า</th>
                  <th scope="col">จำนวน</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">วันที่สั่งซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in buyHistory" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td width="150px">
                    <img width="100%" class="rounded" :src="item.img_product" />
                  </td>
                  <td style="text-transform: capitalize">
                    {{ item.name_product }}
                  </td>
                  <td>{{ item.number_product }} เครื่อง</td>
                  <td>
                    {{ item.sum_price }}
                    บาท
                  </td>
                  <td>{{ item.date.toDate().toDateString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["buyHistory"]),
  },
  created() {
    this.getBuyHistory();
  },
  methods: {
    ...mapActions(["getBuyHistory"]),
  },
};
</script>

<style>
.card-buy-history {
  border: none;
  min-height: 70vh;
}
</style>
