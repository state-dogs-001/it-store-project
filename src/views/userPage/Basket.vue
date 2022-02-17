<template>
  <div>
    <b-container>
      <b-card
        class="mt-5 card-basket"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h1>สินค้าในตะกร้า</h1>
        </template>
        <!-- Not have any order -->
        <template v-if="productsInBasket.length < 1">
          <div class="image-content d-flex justify-content-center text-center">
            <b-row>
              <b-col lg="12" class="title mt-4">
                <h3>ขออภัยคุณไม่สินค้าในตะกร้า</h3>
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
                  <th scope="col" colspan="2">คำสั่ง</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in productsInBasket" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td width="150px">
                    <img width="100%" class="rounded" :src="item.img_product" />
                  </td>
                  <td style="text-transform: capitalize">
                    {{ item.name_product }}
                  </td>
                  <td>
                    <b-form-spinbutton
                      id="sb-inline"
                      v-model="item.number_product"
                      @change="numberProduct = $event"
                      inline
                    />
                  </td>
                  <td>
                    {{ item.price_product * item.number_product }}
                    บาท
                  </td>
                  <td>
                    <b-button variant="danger" @click="deleteClick(item.id)">
                      ลบสินค้า
                    </b-button>
                  </td>
                  <td>
                    <b-button variant="success" @click="buyClick(item)">
                      สั่งซื้อ
                    </b-button>
                  </td>
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
import { Timestamp } from "@firebase/firestore";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    // user info
    ...mapGetters(["user"]),
    ...mapGetters(["telNumber"]),
    ...mapGetters(["location"]),

    // product in basket
    ...mapGetters(["productsInBasket"]),
  },
  data() {
    return {
      numberProduct: null,
    };
  },
  created() {
    // Get user info
    this.getUserTelNumber();
    this.getUserLocation();

    // Get product in basket
    this.getProductInBasket();
  },
  methods: {
    // Fucntions get user info
    ...mapActions(["getUserTelNumber"]),
    ...mapActions(["getUserLocation"]),

    // Fucntion get product in basket
    ...mapActions(["getProductInBasket"]),

    // Buy product function
    ...mapActions(["buyProduct"]),
    async buyClick(e) {
      // Set number product
      let numberProduct;
      if (this.numberProduct != null) {
        numberProduct = this.numberProduct;
      } else {
        numberProduct = e.number_product;
      }

      // Calculate summary price of product
      const sumPrice = numberProduct * e.price_product;

      // Check user tel and location before buy product
      if (this.telNumber.length <= 0 || this.location.length <= 0) {
        alert("กรุณาเพิ่มที่อยู่หรือเบอร์โทรติดต่อก่อนทำการสั่งซื้อสินค้า");
        this.$router.push("/user");
      } else {
        // Format user info
        const telNumber = this.telNumber.map((tel) => {
          return tel.tel_number;
        });
        const location = this.location.map((read) => {
          return `${read.user_more_location} ต.${read.user_subdistrict} อ.${read.user_district} จ.${read.user_province} รหัสไปรษณีย์ ${read.user_zipcode}`;
        });

        const data = {
          user_email: e.user_email,
          user_name: this.user.displayName,
          user_tel: telNumber,
          user_location: location,
          name_product: e.name_product,
          number_product: numberProduct,
          img_product: e.img_product,
          sum_price: sumPrice,
          date: Timestamp.now(),
        };

        try {
          await this.buyProduct({
            data: data,
            id: e.id,
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    // Delete product in basket
    ...mapActions(["deleteProdctInBasket"]),
    async deleteClick(id) {
      const res = confirm("คุณต้องการจะลบสินค้าหรือไม่?");
      if (res === true) {
        try {
          await this.deleteProdctInBasket(id);
          alert("ลบข้อมูลสำเร็จ");
          window.location.reload();
        } catch (error) {
          console.log(error.message);
        }
      }
    },
  },
};
</script>

<style>
.card-basket {
  border: none;
  min-height: 70vh;
}
.image-content .title {
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(255, 43, 96);
}
</style>
