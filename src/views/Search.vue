<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="mt-5">
          <h1>ค้นหา: {{ searchText }}</h1>
          <br />
          <p>ผลการค้นหา</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: this.$route.params.id,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.$route.params.id);
    },
  },
};
</script>

<style></style>
