<template>
  <div>
    <b-row>
      <b-col lg="12" class="list-brannds">
        <h4>หมวดหมู่: โทรศัพท์มือถือ</h4>
        <p>
          แบรนด์:
          <button class="btn btn-link" @click="toApple">Apple</button> |
          <button class="btn btn-link" @click="toOppo">OPPO</button> |
          <button class="btn btn-link" @click="toSamsung">Samsung</button> |
          <button class="btn btn-link" @click="toXiaomi">Xiaomi</button>
        </p>
      </b-col>

      <!-- Apple Products -->
      <b-col lg="12" id="apple" class="logo-product">
        <b-img
          src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in appleMobiles"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา = {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button href="#" variant="success">หยิบใส่ตะกร้า</b-button>
          </b-col>
        </b-card>
      </b-col>

      <!-- OPPO Products -->
      <b-col lg="12" id="oppo" class="logo-product">
        <b-img src="https://cdn-icons-png.flaticon.com/512/882/882745.png" />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in oppoMobiles"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา = {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button href="#" variant="success">หยิบใส่ตะกร้า</b-button>
          </b-col>
        </b-card>
      </b-col>

      <!-- Samsung Products -->
      <b-col lg="12" id="samsung" class="logo-product">
        <b-img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/samsung-256.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in samsungMobiles"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา = {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button href="#" variant="success">หยิบใส่ตะกร้า</b-button>
          </b-col>
        </b-card>
      </b-col>

      <!-- Xiaomi Products -->
      <b-col lg="12" id="xiaomi" class="logo-product">
        <b-img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/388_Xiaomi_logo-256.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in xiaomiMobiles"
        :key="read.nameProduct"
      >
        <b-card
          :title="read.brandProduct"
          :sub-title="read.nameProduct"
          :img-src="read.imageProduct"
          img-top
          tag="article"
          style="max-width: 18rem"
          class="card-image"
        >
          <b-card-text>
            ราคา = {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </b-card-text>

          <!-- Button -->
          <b-col lg="12" class="text-center">
            <b-button
              variant="primary"
              class="mr-2"
              @click="getProductID(read.id)"
            >
              ดูสินค้า
            </b-button>
            <b-button href="#" variant="success">หยิบใส่ตะกร้า</b-button>
          </b-col>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["mobiles"]),

    // filter mobiles brand
    appleMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("apple");
      });
    },
    samsungMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("samsung");
      });
    },
    oppoMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("oppo");
      });
    },
    xiaomiMobiles: function () {
      return this.mobiles.filter((products) => {
        return products.brandProduct.match("xiaomi");
      });
    },
  },
  created() {
    this.getMobiles();
  },
  methods: {
    // Go to id smooth scrolling
    toApple() {
      document.querySelector("#apple").scrollIntoView({
        behavior: "smooth",
      });
    },
    toOppo() {
      document.querySelector("#oppo").scrollIntoView({
        behavior: "smooth",
      });
    },
    toSamsung() {
      document.querySelector("#samsung").scrollIntoView({
        behavior: "smooth",
      });
    },
    toXiaomi() {
      document.querySelector("#xiaomi").scrollIntoView({
        behavior: "smooth",
      });
    },

    // Get data
    ...mapActions(["getMobiles"]),

    // Go to product more
    getProductID(id) {
      this.$router.push(`/view/product/?id=${id}`);
    },
  },
};
</script>

<style>
.list-brannds button {
  color: black;
}
.list-brannds button:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
.logo-product {
  overflow: hidden;
}
.logo-product img {
  width: 10%;
  margin: 30px 20px 10px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.logo-product img:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}
@media (max-width: 770px) {
  .logo-product img {
    width: 15%;
  }
}
.card-image {
  border: none;
  margin: 0 auto;
  float: none;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-image img {
  margin: 0 auto;
  float: none;
  width: 8rem;
  height: auto;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.card-image img:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

.card-a a {
  color: black;
}
.card-a a:hover {
  text-decoration: none;
}
.card-a .card-more {
  border: none;
  margin: 0 auto;
  float: none;
  width: 18rem;
  height: 20rem;
  overflow: hidden;
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.card-a .card-more:hover {
  background-color: rgb(60, 60, 60);
  color: white;
}
.card-a .card-more h1 {
  margin-top: 80px;
}
</style>
