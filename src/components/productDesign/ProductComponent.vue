<template>
  <div>
    <b-container>
      <b-row>
        <!-- User Display name -->
        <b-col sm="12" lg="12" class="my-5 header">
          <h1>
            <span class="font-weight-lighter">IT</span>
            <span class="font-weight-bold">Market</span>
          </h1>
          <span> ยินดีตอนรับ {{ userName }} </span>
        </b-col>

        <!-- Products Card-->
        <b-col sm="12" lg="12">
          <b-card
            class="card-product mb-5"
            header-tag="header"
            header-bg-variant="dark"
            header-text-variant="white"
          >
            <!-- Header of Card -->
            <template #header>
              <b-col lg="12" class="my-2 my-sm-0">
                <span class="h2">
                  <!-- Hamburger icon -->
                  <b-button v-b-toggle.my-collapse variant="outline">
                    <span class="h3"
                      ><b-icon icon="list" variant="light"
                    /></span>
                  </b-button>
                  เลือกซื้อสินค้า
                </span>
              </b-col>
            </template>
            <!-- List Products -->
            <b-collapse id="my-collapse" class="mb-5">
              <b-container>
                <b-col v-if="pathName != 'AllProducts'">
                  <a href="/products/all"> สินค้าทั้งหมด </a>
                </b-col>

                <b-col v-if="pathName != 'Mobiles'">
                  <a href="/products/mobiles"> โทรศัพท์มือถือ </a>
                </b-col>

                <b-col v-if="pathName != 'Laptops'">
                  <a href="/products/laptops"> แล็ปท็อป </a>
                </b-col>

                <b-col v-if="pathName != 'Computers'">
                  <a href="/products/computers"> คอมพิวเตอร์เซ็ต </a>
                </b-col>
              </b-container>
            </b-collapse>

            <!-- Render pager -->
            <div class="render-products">
              <router-view />
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
  },
  data() {
    return {
      pathName: this.$route.name,
    };
  },
};
</script>

<style>
#my-collapse a {
  color: rgb(255, 43, 96);
}
#my-collapse a:hover {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.card-product {
  min-height: 50vh;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.header h1 span {
  color: white;
  font-size: 60px;
}
.header span {
  color: white;
  font-size: 20px;
}
@media (max-width: 767px) {
  .header {
    text-align: center;
  }
}
</style>
