<template>
  <div>
    <b-row>
      <b-col lg="12" class="list-brannds">
        <h4>หมวดหมู่: สินค้าทั้งหมด</h4>
        <p>
          ประเภท:
          <a href="#mobile">โทรศัพท์มือถือ</a> |
          <a href="#laptop">แล็ปท็อป</a> |
          <a href="#computer">คอมพิวเตอร์เซ็ต</a>
        </p>
      </b-col>

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
          <b-card-text> ราคา = {{ read.priceProduct }} </b-card-text>

          <b-button href="#" variant="primary" class="mr-2">
            Go somewhere
          </b-button>
          <b-button href="#" variant="success">View</b-button>
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
          <b-card-text> ราคา = {{ read.priceProduct }} </b-card-text>

          <b-button href="#" variant="primary" class="mr-2"
            >Go somewhere</b-button
          >
          <b-button href="#" variant="success">View</b-button>
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
          <b-card-text> ราคา = {{ read.priceProduct }} </b-card-text>

          <b-button href="#" variant="primary" class="mr-2"
            >Go somewhere</b-button
          >
          <b-button href="#" variant="success">View</b-button>
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
  mounted() {
    // Use for smooth scroll a href to id
    this.smoothScroll();
  },
  methods: {
    ...mapActions(["getMobiles"]),
    ...mapActions(["getLaptops"]),
    ...mapActions(["getComputers"]),

    // // This function use for smooth scroll a href to id
    smoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    },
  },
};
</script>

<style>
.list-brannds a {
  color: black;
}
.list-brannds a:hover {
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
