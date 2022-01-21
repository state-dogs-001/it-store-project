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
        <b-row>
          <b-col lg="12">
            <p>
              เกี่ยวกับเว็บไซต์ <router-link to="/home">ITMarket</router-link>
              ถูกจัดทำขึ้นเพื่อเป็นกรณีศึกษาของเว็บไซต์ซื้อขายสินค้าแบบออนไลน์
              <span class="font-weight-bold">เท่านั้น</span>
              สินค้าที่ถูกแสดงในเว็บไซต์นี้ถูกใช้เพื่อเป็นกรณีศึกษาและไม่ได้มีเจตนาในการละเมิดลิขสิทธิ์
              <br />
              <br />
              อ้างอิงข้อมูลมาจากเว็บไซต์
              <br />
              <br />
              <span v-for="(doc, i) in website" :key="doc.name">
                <a :href="doc.link" target="_blank">
                  {{ i + 1 }}. {{ doc.name }}
                </a>
                <br />
              </span>
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
        { name: "Advice", link: "https://www.advice.co.th/" },
        { name: "JIB", link: "https://www.jib.co.th/" },
        { name: "BaNANA", link: "https://www.bnn.in.th/th" },
        { name: "Apple Store", link: "https://www.apple.com/th/" },
        { name: "IT CITY", link: "https://itcity.co.th/" },
      ],
    };
  },
};
</script>

<style>
.card-about {
  border: none;
}
a {
  color: black;
}
a:hover {
  text-decoration: none;
  color: red;
}
</style>
