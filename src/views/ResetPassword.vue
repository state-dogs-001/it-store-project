<template>
  <div>
    <h1>Reset Your Password</h1>
    <br />
    <form @submit.prevent="sendEmail">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        required
        placeholder="Press your email"
      />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// const auth = getAuth();

export default {
  name: "ResetPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapActions(["resetpassword"]),
    async sendEmail() {
      try {
        await this.resetpassword({
          email: this.email,
        });
        console.log("Send Email Success");
      } catch (err) {
        console.log(err);
      }
    },
    //sendEmail() {
    //   sendPasswordResetEmail(auth, this.email)
    //     .then(() => {
    //       alert(
    //         "ส่งข้อมูลการ reset password ของท่านแล้ว\nกรุณาตรวจสอบที่กล่องข้อความของ email ของท่าน"
    //       );
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message;
    //       console.log(errorMessage);
    //     });
    //},
  },
};
</script>

<style></style>
