<template>
  <div>
    <b-container>
      <b-card
        class="card-dashboard mt-5 mb-4"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
        no-body
      >
        <template #header>
          <h2>Dashboard</h2>
        </template>

        <!-- Left position is menu setting -->
        <!-- Right position is show -->
        <b-tabs card pills :vertical="statusVertical">
          <b-tab title="จัดการสินค้า" active>
            <b-card-text class="card-text-size">
              <ProductManage />
            </b-card-text>
          </b-tab>

          <b-tab title="คำสั่งซื้อ">
            <b-card-text class="card-text-size">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi itaque voluptas unde quod quis et, id molestiae,
                pariatur ipsa voluptate delectus ex exercitationem sint odit
                quas eveniet cupiditate in? Blanditiis?
              </p>
            </b-card-text>
          </b-tab>

          <b-tab title="การรายงานจากลูกค้า">
            <b-card-text class="card-text-size">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi itaque voluptas unde quod quis et, id molestiae,
                pariatur ipsa voluptate delectus ex exercitationem sint odit
                quas eveniet cupiditate in? Blanditiis?
              </p>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import ProductManage from "../../components/AdminPageDesign/ProductManagement.vue";

export default {
  components: {
    ProductManage,
  },
  data() {
    return {
      statusVertical: true,
    };
  },
  mounted() {
    const pageY = window.screen.width;
    if (pageY <= 1200) {
      this.statusVertical = false;
    }

    this.resizePage();
  },
  methods: {
    resizePage() {
      window.addEventListener("resize", () => {
        let pageYResize = window.innerWidth;
        if (pageYResize <= 1200) {
          this.statusVertical = false;
        } else {
          this.statusVertical = true;
        }
      });
    },
  },
};
</script>

<style>
.card-dashboard {
  border: none;
}
.nav-pills a {
  color: black;
}
.nav-pills {
  min-height: 30rem;
}
.card-text-size {
  min-height: auto;
}
@media (max-width: 1200px) {
  .nav-pills {
    min-height: auto;
  }
  .card-text-size {
    min-height: 10rem;
  }
}
.nav-pills .nav-link:not(.active) {
  background-color: none;
}
.nav-pills .nav-link.active {
  background-color: rgb(255, 43, 96);
}
</style>
