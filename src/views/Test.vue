<template>
  <div>
    <b-container>
      <b-card class="mt-5 mb-4">
        <b-row>
          <b-col lg="12">
            <h1>Test Firestore</h1>
            <hr />
          </b-col>
          <b-col lg="12">
            <b-form @submit.stop.prevent="submit">
              <b-row class="form-group">
                <b-col lg="2" class="col-form-label">
                  <label for="text">Add Data</label>
                </b-col>
                <b-col lg="8">
                  <input
                    type="text"
                    id="text"
                    name="text"
                    v-model="text"
                    required
                    class="form-control"
                  />
                </b-col>
                <b-col lg="2">
                  <input
                    type="submit"
                    value="Add"
                    class="btn btn-success btn-block"
                  />
                </b-col>
              </b-row>
            </b-form>
          </b-col>
          <b-col lg="12" class="mt-3 text-center">
            <template v-if="status">
              <div v-for="(read, i) in data" :key="i">
                <br />
                <h4>{{ read.text }}</h4>
                <p>{{ read.time.toDate().toDateString() }}</p>
                <p>
                  Time:
                  {{
                    read.time.toDate().getHours() +
                    ":" +
                    read.time.toDate().getMinutes()
                  }}
                </p>
                <br />
                <b-row>
                  <!-- delete -->
                  <b-col lg="6">
                    <b-button variant="danger" block @click="deleleData(i)">
                      Delele
                    </b-button>
                  </b-col>
                  <!-- update -->
                  <b-col lg="6">
                    <b-button variant="primary" block @click="openModal(i)">
                      Update
                    </b-button>
                  </b-col>
                </b-row>
              </div>
              <!-- Modal -->
              <b-modal v-model="show" centered hide-footer>
                <!-- Modal head -->
                <template #modal-header="{ close }">
                  <h3>UPDATE</h3>
                  <button @click="close()" class="btn btn-danger">
                    <b-icon icon="x"></b-icon>
                  </button>
                </template>
                <!-- form update -->
                <b-form @submit.stop.prevent="update">
                  <b-row>
                    <b-col lg="7" sm="12">
                      <!-- id -->
                      <input
                        type="hidden"
                        id="idOftext"
                        name="idOftext"
                        v-model="id"
                      />
                      <!-- text update -->
                      <input
                        type="text"
                        id="updateText"
                        name="updateText"
                        v-model="updateText"
                        required
                        :placeholder="oldText"
                        class="form-control"
                      />
                    </b-col>
                    <b-col lg="5" sm="12" class="my-2 my-sm-0">
                      <input
                        type="reset"
                        value="Cancel"
                        class="btn btn-danger btn-block mr-2"
                      />
                      <input
                        type="submit"
                        value="Update"
                        class="btn btn-success btn-block"
                      />
                    </b-col>
                  </b-row>
                </b-form>
              </b-modal>
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
      // Text input for add data
      text: null,

      // modal use for update data
      show: false,
      oldText: null, // use to show in
      updateText: null,
      id: null,
    };
  },
  computed: {
    data: function () {
      return this.$store.state.Database.dataArray;
    },
    status: function () {
      return this.$store.state.Database.readStatus;
    },
  },
  created() {
    this.getDataFromDB();
  },
  methods: {
    // Read data
    ...mapActions(["getData"]),
    async getDataFromDB() {
      await this.getData();
    },

    // Add data
    ...mapActions(["addData"]),
    async submit() {
      try {
        await this.addData(this.text);
        this.text = null;
        // when success page will reload
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },

    // Delete data
    ...mapActions(["removeData"]),
    async deleleData(index) {
      const text = this.data[index].text;
      const id = this.data[index].id;
      const res = confirm(`Do you want to delete this ${text}?`);
      // It will show confirm if you choose ok data will be remove from database.
      if (res == true) {
        try {
          await this.removeData(id);
          // when success page will reload
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    },

    // Update data
    // 1.click to show modal
    openModal(i) {
      // set show for modal
      this.show = true;

      // set text and id for use in modal
      const text = this.data[i].text;
      const id = this.data[i].id;
      this.oldText = text;
      this.id = id;
    },
    // 2.click to update data
    ...mapActions(["updateData"]),
    async update() {
      try {
        await this.updateData({
          id: this.id,
          text: this.updateText,
        });
        // set show for exit modal
        this.show = false;
        // when success page will reload
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
