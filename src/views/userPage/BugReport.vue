<template>
  <div>
    <b-container>
      <b-card
        class="mt-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
      >
        <template #header>
          <h2>รายงานปัญหาเว็บไซต์</h2>
        </template>
        <b-row>
          <form @submit.stop.prevent="send">
            <b-col lg="12">
              <textarea
                id="reportText"
                v-model="reportText"
                rows="5"
                cols="110"
                required
                class="form-control"
                placeholder="คุณต้องการรายงานปัญหาอะไร?"
              ></textarea>
            </b-col>
            <b-col lg="12" class="text-center mt-5 mb-2">
              <input type="reset" value="ยกเลิก" class="btn btn-danger mr-3" />
              <input
                type="submit"
                value="รายงานปัญหา"
                class="btn btn-success"
              />
            </b-col>
          </form>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportText: null,
    };
  },
  methods: {
    send() {
      //
    },
  },
};
</script>

<style>
.card {
  border: none;
}
</style>
