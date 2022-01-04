<template>
  <div>
    <!-- Search box -->
    <b-nav-form @submit.prevent="searchClick">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        v-model="searchItem"
        required
        placeholder="คุณต้องการค้นหาอะไร"
      ></b-form-input>
      <!-- Button of search box -->
      <b-button variant="success" size="sm" type="submit">
        ค้นหา <b-icon icon="search" />
      </b-button>
    </b-nav-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: null,
    };
  },
  methods: {
    // Search function
    searchClick() {
      // Use window.location.replace bcuz it'll reload page once before visit search page.
      window.location.replace(`/search/${this.searchItem}`);
      this.searchItem = null;
    },
  },
};
</script>

<style></style>
