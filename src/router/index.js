import Vue from "vue";
import VueRouter from "vue-router";

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
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/productPage/Products.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/authPage/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/authPage/Register.vue"),
  },
  {
    path: "/reset_password",
    name: "ResetPasswprd",
    component: () => import("../views/authPage/ResetPassword.vue"),
  },
  {
    path: "/test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/search/:id",
    name: "Search",
    component: () => import("../views/productPage/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
