<template>
  <div>
    <b-container>
      <b-card
        class="card-user-setting my-5"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="light"
        no-body
      >
        <template #header>
          <h1>ตั้งค่าโปรไฟล์</h1>
        </template>

        <!-- Left position is menu setting -->
        <!-- Right position is show -->
        <b-tabs card pills :vertical="statusVertical">
          <b-tab title="หน้าโปรไฟล์" active>
            <b-card-text class="card-text-size">
              <ProfileComp />
            </b-card-text>
          </b-tab>

          <b-tab title="ความปลอดภัย">
            <b-card-text class="card-text-size">
              <SecureComp />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import ProfileComp from "../../components/userPageDesign/UserSettingComponent/ProfileComponent.vue";
import SecureComp from "../../components/userPageDesign/UserSettingComponent/SecureComponent.vue";

export default {
  components: {
    ProfileComp,
    SecureComp,
  },
  data() {
    return {
      statusVertical: true,
    };
  },
  mounted() {
    const pageY = window.screen.width;
    if (pageY <= 770) {
      this.statusVertical = false;
    }

    this.resizePage();
  },
  methods: {
    resizePage() {
      window.addEventListener("resize", () => {
        let pageYResize = window.innerWidth;
        if (pageYResize <= 770) {
          this.statusVertical = false;
        } else {
          this.statusVertical = true;
        }
      });
    },
  },
};
</script>

<style>
.card-user-setting {
  border: none;
}
.nav-pills a {
  color: black;
}
.nav-pills {
  min-height: 30rem;
}
.card-text-size {
  min-height: auto;
}
@media (max-width: 770px) {
  .nav-pills {
    min-height: auto;
  }
  .card-text-size {
    min-height: 10rem;
  }
}
.nav-pills .nav-link:not(.active) {
  background-color: none;
}
.nav-pills .nav-link.active {
  background-color: rgb(255, 43, 96);
}
</style>
