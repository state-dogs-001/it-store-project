<template>
  <div>
    <b-container>
      <b-card
        class="mt-5 mb-5 card-contact"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template #header>
          <h1>ผู้จัดทำ</h1>
        </template>
        <b-row>
          <b-col lg="4" sm="12" class="my-3 text-center">
            <div class="myImage">
              <b-img :src="myImg" />
              <div class="img-overlay">
                <div class="title">อาร์ม</div>
                <div class="text">นักศึกษาวิชาวิทยาการคอมพิวเตอร์</div>
              </div>
            </div>
          </b-col>
          <b-col lg="8" sm="12" class="my-3">
            <h3>ชื่อผู้จัดทำ</h3>
            <p>นายจารุวัฒน์ แต่งนวล ชื่อเล่น อาร์ม</p>
            <br />
            <h3>ประวัติส่วนตัว</h3>
            <p>นักศึกษาวิชาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 3</p>
            <p>มหาวิทยาลัยแม่โจ้ <b-icon icon="geo-alt" /></p>
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="mjuMap"
              allowfullscreen
            ></b-embed>
            <br />
            <h3>ช่องทางการติดต่อ</h3>
            <div class="link-contact">
              <a
                href="https://www.facebook.com/arm53797/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/9_arm_jaruwat/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/JTaengnuan"
                target="_blank"
                rel="noreferrer"
              >
                Twitter <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/state-dogs-001"
                target="_blank"
                rel="noreferrer"
              >
                Github <i class="fab fa-github"></i>
              </a>
            </div>
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
      myImg:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/76756931_198466937985279_6177008015053422592_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH1mQWIk5zDngY2zfCK2_wPa597C83aPqFrn3sLzdo-oXi5hEtP3emOklZ5itluvP2gfkITPbD5msPOes71vAK8&_nc_ohc=kgnII1uuJB4AX8hZ5y4&tn=pzuOfvhYeP6S9HQ_&_nc_ht=scontent.fcnx4-1.fna&oh=00_AT9PK1pV8QmjJqHCZVkDvjlE0kMmsssxCApSQ0tg9nZBIA&oe=6207727B",
      mjuMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.829760087501!2d99.00867291484847!3d18.894632087192207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3cca984ecc69%3A0x2980791c600add52!2sMaejo%20University!5e0!3m2!1sen!2sth!4v1642258525520!5m2!1sen!2sth",
    };
  },
};
</script>

<style>
.card-contact {
  border: none;
}
.link-contact a {
  color: black;
  margin-right: 10px;
}
.link-contact a:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}

.myImage {
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 15rem;
}
.myImage img {
  display: block;
  width: 100%;
  border-radius: 5px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.myImage .img-overlay {
  position: absolute;
  padding-top: 15px;
  padding-bottom: 15px;
  left: 0px;
  bottom: 0px;
  margin: 0px auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  opacity: 0;
  transition: opacity 0.25s;
}
.myImage .img-overlay .title {
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 2px;
}
.myImage .img-overlay .text {
  font-size: 1em;
  margin-top: 0.25em;
}
.myImage img:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.myImage .img-overlay:hover {
  opacity: 1;
}
</style>
