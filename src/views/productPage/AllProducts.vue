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
      <b-col class="my-4" lg="4" sm="6" v-for="mi in 5" :key="mi">
        <CardComp title="Mobile Product" />
      </b-col>
      <b-col class="my-4 text-center" lg="4" sm="6">
        <a href="/products/mobiles" class="card-a">
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
      <b-col class="my-4" lg="4" sm="6" v-for="li in 5" :key="li">
        <CardComp title="Laptop Product" />
      </b-col>
      <b-col class="my-4 text-center" lg="4" sm="6">
        <a href="/products/laptops" class="card-a">
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
      <b-col class="my-4" lg="4" sm="6" v-for="ci in 5" :key="ci">
        <CardComp title="Computer Product" />
      </b-col>
      <b-col class="my-4 text-center" lg="4" sm="6">
        <a href="/products/computers" class="card-a">
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
import CardComp from "../../components/productDesign/CardComponent.vue";

export default {
  components: {
    CardComp,
  },
  data() {
    return {
      acerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1200px-Acer_2011.svg.png",
      appleLogo:
        "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
      asusLogo:
        "https://www.pngplay.com/wp-content/uploads/13/Asus-Logo-Transparent-Image.png",
      dellLogo:
        "https://www.pngplay.com/wp-content/uploads/7/Dell-Transparent-File.png",
      hpLogo: "https://inwfile.com/s-fk/33804j.png",
      samsungLogo:
        "http://pngimg.com/uploads/samsung_logo/samsung_logo_PNG14.png",
      xiaomiLogo:
        "https://logos-download.com/wp-content/uploads/2016/05/Xiaomi_Logo_2019.png",
    };
  },
  mounted() {
    // Use for smooth scroll a href to id
    this.smoothScroll();
  },
  methods: {
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
.card-a {
  color: black;
}
.card-a:hover {
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
