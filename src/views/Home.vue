<template>
  <div class="home">
    <b-jumbotron class="jumbotron-background" fluid text-variant="light">
      <template #header>
        <span class="font-weight-lighter">IT</span>
        <span class="font-weight-bold">Market</span>
      </template>

      <template #lead>
        <hr class="my-4" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
        sapiente, animi maiores tempore fugit nam beatae tenetur ullam impedit
        porro amet! Culpa officiis blanditiis animi unde? Dolorem, amet tempora!
      </template>

      <b-button class="mt-4" variant="primary" to="/products"
        >See our product</b-button
      >
    </b-jumbotron>
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
  min-height: 90vh;
}
</style>
