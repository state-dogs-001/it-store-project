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
        <template>
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
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {};
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
