<template>
  <div>
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a
            href="https://www.facebook.com/arm53797/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/9_arm_jaruwat/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/JTaengnuan"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/state-dogs-001"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link to="/home">หน้าแรก</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/about">เกี่ยวกับ</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/contact">ติดต่อ</router-link>
          </li>
        </ul>
        <p class="copyright">
          <span>IT</span>
          <span class="font-weight-bold">
            Market <b-icon icon="cart2" animation="cylon" />
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<style>
.render-pages {
  min-height: 63vh;
}

.footer-basic {
  padding: 40px 0;
  background-color: #343a40;
  opacity: 0.8;
  color: #fff;
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-basic li {
  padding: 0 10px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  color: rgb(255, 43, 96);
  opacity: 1;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social > a:hover {
  color: rgb(255, 43, 96);
  opacity: 0.9;
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 0;
}
</style>
