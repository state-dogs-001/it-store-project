<template>
  <div>
    <b-container>
      <b-card
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        class="mt-5 card-notfound"
      >
        <template #header>
          <h2>PAGE NOT FOUND <b-icon icon="x-octagon-fill" /></h2>
        </template>
        <b-row>
          <b-col lg="12" class="text-center">
            <b-img
              src="https://media4.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ecf05e47z43y36rdv6i5zypsvs7js4yg47ribh8gmifhu0t1&rid=giphy.gif&ct=g"
            ></b-img>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-notfound {
  border: none;
}
img {
  max-width: 16rem;
}
</style>
