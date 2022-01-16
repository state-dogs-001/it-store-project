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
  </div>
</template>

<script>
export default {};
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
  min-height: 80vh;
}
</style>
