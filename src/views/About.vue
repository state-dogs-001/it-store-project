<template>
  <div>
    <b-container>
      <b-card
        class="mt-5 mb-3 card-about"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template #header>
          <h1>เกี่ยวกับ</h1>
        </template>

        <!-- Title -->
        <b-row>
          <b-col lg="12" class="about-title mb-4">
            <p>
              เกี่ยวกับเว็บไซต์ <router-link to="/home">ITMarket</router-link>
              ถูกจัดทำขึ้นเพื่อเป็นกรณีศึกษาของเว็บไซต์ซื้อขายสินค้าแบบออนไลน์
              <span class="font-weight-bold">เท่านั้น</span>
              สินค้าที่ถูกแสดงในเว็บไซต์นี้ถูกใช้เพื่อเป็นกรณีศึกษาและไม่ได้มีเจตนาในการละเมิดลิขสิทธิ์
              <br />
              <br />
              อ้างอิงข้อมูลมาจากเว็บไซต์
            </p>
          </b-col>
        </b-row>

        <!-- icon logos and links -->
        <b-row class="text-center mb-5 d-flex justify-content-center">
          <b-col v-for="read in website" :key="read.name" class="about-ex">
            <b-img :src="read.logo" rounded="circle" width="100%" />
            <p class="mt-2">
              <a :href="read.link" target="_blank" rel="noreferrer">
                {{ read.name }}
              </a>
            </p>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      website: [
        {
          name: "Advice",
          link: "https://www.advice.co.th/",
          logo: "https://play-lh.googleusercontent.com/Idhb-3-irkDYXm-w_4kjUHclHf5FMCLChgUpfFxlwYWVMYVEmLeo4NoR8j0kVgw_-sY",
        },
        {
          name: "JIB",
          link: "https://www.jib.co.th/",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAxiZRtQbr0zc5Ytpq4uAMlftSEluw4LimqVI0hTpxGzNtt-pf5t4mc_SmxrBPmtlsTM&usqp=CAU",
        },
        {
          name: "BaNANA IT",
          link: "https://www.bnn.in.th/th",
          logo: "https://seeklogo.com/images/B/banana-it-logo-76BB8903F7-seeklogo.com.png",
        },
        {
          name: "Apple Store",
          link: "https://www.apple.com/th/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/1024px-Apple_Store_logo.svg.png",
        },
        {
          name: "IT CITY",
          link: "https://itcity.co.th/",
          logo: "https://cf.shopee.co.th/file/3373a0b35a3302fd0eaeb4ef6a58df5b",
        },
      ],
    };
  },
};
</script>

<style>
.card-about {
  border: none;
}
.about-title p {
  text-indent: 50px;
}
.about-title a {
  color: black;
}
.about-title a:hover {
  text-decoration: none;
  color: red;
}
.about-ex a {
  color: black;
}
.about-ex a:hover {
  text-decoration: none;
  color: red;
}
.about-ex img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.about-ex img:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
