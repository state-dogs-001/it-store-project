<template>
  <div class="all-products">
    <b-row>
      <b-col lg="12" class="list-brannds">
        <h4>หมวดหมู่: สินค้าทั้งหมด</h4>
        <p>
          ประเภท:
          <button class="btn btn-link" @click="toMobile">โทรศัพท์มือถือ</button>
          | <button class="btn btn-link" @click="toLaptop">แล็ปท็อป</button> |
          <button class="btn btn-link" @click="toComputer">
            คอมพิวเตอร์เซ็ต
          </button>
        </p>
      </b-col>

      <!-- Mobile Products -->
      <b-col lg="12" id="mobile">
        <h1 class="mt-4 font-weight-bold text-center">
          โทรศัพท์มือถือ <i class="fas fa-mobile-alt"></i>
        </h1>
        <hr />
      </b-col>

      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in mobileLimit"
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

      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/mobiles">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>

      <!-- Laptop Products -->
      <b-col lg="12" id="laptop">
        <h1 class="mt-4 font-weight-bold text-center">
          แล็ปท็อป <i class="fas fa-laptop"></i>
        </h1>
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in laptopLimit"
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
      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/laptops">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>

      <!-- Computer Products -->
      <b-col lg="12" id="computer">
        <h1 class="mt-4 font-weight-bold text-center">
          คอมพิวเตอร์เซ็ต <i class="fas fa-desktop"></i>
        </h1>
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in computerLimit"
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
      <b-col class="my-4 text-center card-a" lg="4" sm="6">
        <a href="/products/computers">
          <b-card class="card-more">
            <h1><i class="fas fa-door-open"></i></h1>
            <h4>ดูสินค้าเพิ่มเติม</h4>
          </b-card>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["mobiles"]),
    ...mapGetters(["laptops"]),
    ...mapGetters(["computers"]),

    mobileLimit: function () {
      return this.mobiles.slice(0, 5);
    },
    laptopLimit: function () {
      return this.laptops.slice(0, 5);
    },
    computerLimit: function () {
      return this.computers.slice(0, 5);
    },
  },
  created() {
    // get data
    this.getMobiles();
    this.getLaptops();
    this.getComputers();
  },
  methods: {
    // Go to id smooth scrolling
    toMobile() {
      document.querySelector("#mobile").scrollIntoView({
        behavior: "smooth",
      });
    },
    toLaptop() {
      document.querySelector("#laptop").scrollIntoView({
        behavior: "smooth",
      });
    },
    toComputer() {
      document.querySelector("#computer").scrollIntoView({
        behavior: "smooth",
      });
    },

    // Get Data
    ...mapActions(["getMobiles"]),
    ...mapActions(["getLaptops"]),
    ...mapActions(["getComputers"]),

    // Go to view product more
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
