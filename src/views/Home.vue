<template>
  <div class="home">
    <b-jumbotron class="jumbotron-background" fluid text-variant="light">
      <template #header>
        <span class="font-weight-lighter">IT</span>
        <span class="font-weight-bold">Market</span>
      </template>

      <template #lead>
        <hr class="my-4" />
        <h3>เว็บไซต์สั่งซื้ออุปกณ์ IT ออนไลน์</h3>
        <p>"สินค้า IT คุณภาพราคาประหยัด"</p>
      </template>

      <b-button class="mt-4" variant="danger" to="/products"
        >คลิ๊กเพื่อดูสินค้า</b-button
      >
    </b-jumbotron>
    <b-container>
      <b-card>
        <b-row>
          <b-col lg="6" sm="12" class="my-3">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </b-col>

          <b-col lg="6" sm="12" class="my-3">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == true) {
      this.$router.push("/products");
    }
  },
};
</script>

<style>
hr {
  border: 1px solid white;
}
.home {
  width: 100%;
  height: 100%;
}
.jumbotron-background {
  background: none;
  min-height: 50vh;
}
.card {
  background: none;
  border: none;
}
.girl-shop {
  margin: 4rem 0 2rem 0;
  text-align: center;
}
.girl-shop img {
  width: 20rem;
}
</style>
