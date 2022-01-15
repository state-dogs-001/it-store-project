<template>
  <div>
    <b-container>
      <b-card
        class="mt-5 mb-3"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template #header>
          <h1>ค้นหา: {{ searchText }}</h1>
        </template>

        <b-row>
          <b-col>
            <p>ผลการค้นหา</p>
            <br />
            <template v-if="filterData.length <= 0">
              <p>Sorry, this {{ searchText }} is not found</p>
            </template>
            <template v-else>
              <div v-for="item in filterData" :key="item.text">
                {{ item.text }}
              </div>
            </template>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchText: this.$route.params.id,
    };
  },
  // If not login redirect to login page
  beforeCreate() {
    if (this.$store.state.Auth.authIsReady == false) {
      this.$router.push("/login");
    }
  },
  created() {
    // Create function get data
    this.getDataFromDB();
  },
  methods: {
    ...mapActions(["getData"]),
    async getDataFromDB() {
      await this.getData();
    },
  },
  computed: {
    // Data before search (not show)
    data: function () {
      return this.$store.state.Database.dataArray;
    },
    // Search
    filterData: function () {
      return this.data.filter((item) => {
        return item.text.match(this.searchText);
      });
    },
  },
};
</script>

<style>
.card {
  border: none;
}
</style>
