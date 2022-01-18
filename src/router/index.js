import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter: (to, from, next) => {
      // if login success user can't visit this page
      if (store.state.Auth.authIsReady) {
        next({ name: "Products" });
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/products",
    name: "Products",
    redirect: "/products/all",
    component: () => import("../views/productPage/Products.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
    children: [
      {
        path: "/products/all",
        name: "AllProducts",
        component: () => import("../views/productPage/AllProducts.vue"),
      },
      {
        path: "/products/computers",
        name: "Computers",
        component: () => import("../views/productPage/CompProducts.vue"),
      },
      {
        path: "/products/laptops",
        name: "Laptops",
        component: () => import("../views/productPage/LaptopProducts.vue"),
      },
      {
        path: "/products/mobiles",
        name: "Mobiles",
        component: () => import("../views/productPage/MobileProducts.vue"),
      },
    ],
  },
  {
    path: "/search/:id",
    name: "Search",
    component: () => import("../views/productPage/Search.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/authPage/Login.vue"),
    beforeEnter: (to, from, next) => {
      // if login success user can't visit this page
      if (store.state.Auth.authIsReady) {
        next({ name: "Products" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/authPage/Register.vue"),
    beforeEnter: (to, from, next) => {
      // if login success user can't visit this page
      if (store.state.Auth.authIsReady) {
        next({ name: "Products" });
      } else {
        next();
      }
    },
  },
  {
    path: "/reset_password",
    name: "ResetPasswprd",
    component: () => import("../views/authPage/ResetPassword.vue"),
    beforeEnter: (to, from, next) => {
      // if login success user can't visit this page
      if (store.state.Auth.authIsReady) {
        next({ name: "Products" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user",
    name: "UserSetting",
    component: () => import("../views/userPage/UserSetting.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user/basket",
    name: "Basket",
    component: () => import("../views/userPage/Basket.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user/update_name",
    name: "Profile",
    component: () => import("../views/userPage/UpdateName.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user/update_location",
    name: "UpdateLocation",
    component: () => import("../views/userPage/UpdateUserLocation.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user/update_tel",
    name: "UpdatePhoneNumber",
    component: () => import("../views/userPage/UpdateUserTel.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user/change_password",
    name: "ChangePassword",
    component: () => import("../views/userPage/ChangePassword.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("../views/userPage/BugReport.vue"),
    beforeEnter: (to, from, next) => {
      // if user is null redirect to login
      if (!store.state.Auth.authIsReady) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/test",
    component: () => import("../views/Test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
