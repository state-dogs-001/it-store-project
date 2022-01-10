<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://i.pinimg.com/originals/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 18rem"
      class="mb-5"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
</style>
