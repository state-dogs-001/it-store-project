<template>
  <div>
    <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>เกี่ยวกับ</h6>
            <p class="text-justify">
              เกี่ยวกับเว็บไซต์
              <router-link to="/home" class="router-color"
                >ITMarket</router-link
              >
              ถูกจัดทำขึ้นเพื่อเป็นกรณีศึกษาของเว็บไซต์ซื้อขายสินค้าแบบออนไลน์เท่านั้นสินค้าที่ถูกแสดงในเว็บไซต์นี้ถูกใช้เพื่อเป็นกรณีศึกษาและไม่ได้มีเจตนาในการละเมิดลิขสิทธิ์
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <!-- Tab Quick Links to right -->
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>อ้างอิง</h6>
            <ul class="footer-links">
              <li>
                <a href="https://www.advice.co.th/" target="_blank">Advice</a>
              </li>
              <li><a href="https://www.jib.co.th/" target="_blank">JIB</a></li>
              <li>
                <a href="https://www.bnn.in.th/th" target="_blank">BaNANA</a>
              </li>
              <li>
                <a href="https://www.apple.com/th/" target="_blank"
                  >Apple Store</a
                >
              </li>
              <li>
                <a href="https://itcity.co.th/" target="_blank">IT CITY</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="github" href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a class="instagram" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.site-footer {
  background-color: #292b2c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
}
.site-footer hr {
  border: 0.5px solid white;
  opacity: 0.5;
}
.site-footer h6 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #ffffff;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: rgb(255, 43, 96);
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: center;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.instagram:hover {
  background-color: #e00bd6;
}
.social-icons a.github:hover {
  background-color: rgb(117, 111, 111);
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
.router-color {
  color: white;
}
.router-color:hover {
  text-decoration: none;
  color: rgb(255, 43, 96);
}
</style>
