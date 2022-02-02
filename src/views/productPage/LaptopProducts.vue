<template>
  <div>
    <b-row>
      <b-col lg="12" class="list-brannds">
        <h4>หมวดหมู่: แล็ปท็อป</h4>
        <p>
          แบรนด์:
          <a href="#acer">Acer</a> | <a href="#asus">Asus</a> |
          <a href="#dell">Dell</a> |
          <a href="#hp">hp</a>
        </p>
      </b-col>

      <!-- Acer Products -->
      <b-col lg="12" id="acer" class="logo-product">
        <b-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acer_Logo.svg/1200px-Acer_Logo.svg.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in acerLaptops"
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

      <!-- Asus Products -->
      <b-col lg="12" id="asus" class="logo-product">
        <b-img
          src="https://www.pngplay.com/wp-content/uploads/13/Asus-Logo-Transparent-Image.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in asusLaptops"
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

      <!-- Dell Products -->
      <b-col lg="12" id="dell" class="logo-product">
        <b-img
          src="https://www.pngplay.com/wp-content/uploads/7/Dell-Transparent-File.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in dellLaptops"
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

      <!-- hp Products -->
      <b-col lg="12" id="hp" class="logo-product">
        <b-img
          src="https://www.pngplay.com/wp-content/uploads/9/HP-Logo-PNG-Clipart-Background.png"
        />
        <hr />
      </b-col>
      <b-col
        class="my-4"
        lg="4"
        sm="6"
        v-for="read in hpLaptops"
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
    ...mapGetters(["laptops"]),

    // filter laptops barnd
    acerLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("acer");
      });
    },
    asusLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("asus");
      });
    },
    dellLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("dell");
      });
    },
    hpLaptops: function () {
      return this.laptops.filter((products) => {
        return products.brandProduct.match("hp");
      });
    },
  },
  created() {
    this.getLaptops();
  },
  methods: {
    ...mapActions(["getLaptops"]),

    getProductID(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth !important;
}
.list-brannds a {
  color: black;
}
.list-brannds a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
.logo-product {
  overflow: hidden;
}
.logo-product img {
  width: 15%;
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
    width: 20%;
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
