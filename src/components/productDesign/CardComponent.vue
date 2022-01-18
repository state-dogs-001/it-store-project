<template>
  <div>
    <b-card
      :title="title"
      img-src="https://wallpapermemory.com/uploads/688/patrick-star-background-hd-2880x1800-135702.jpg"
      img-top
      tag="article"
      style="max-width: 18rem"
      class="card-image"
    >
      <b-card-text> Prics = 10$ </b-card-text>

      <b-button href="#" variant="primary" class="mr-2">Go somewhere</b-button>
      <b-button href="#" variant="success">View</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.card-image {
  border: none;
  margin: 0 auto;
  float: none;
  overflow: hidden;
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-image img {
  width: 18rem;
  height: 10rem;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.card-image img:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}
</style>
