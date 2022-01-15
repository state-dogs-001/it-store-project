<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://wallpapermemory.com/uploads/688/patrick-star-background-hd-2880x1800-135702.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 18rem"
      class="card mb-5"
    >
      <b-card-text> Prics = 10$ </b-card-text>

      <b-button href="#" variant="primary" class="mr-2">Go somewhere</b-button>
      <b-button href="#" variant="success">View</b-button>
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
  margin-bottom: 100px; /* Added */
  overflow: hidden;
  transform: 0.3s;
}
.card:hover {
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
}
.card img {
  width: 18rem;
  height: 10rem;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.card img:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}
</style>
