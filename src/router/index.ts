import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import Checkout from "../pages/Checkout.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/checkout", component: Checkout },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/contact", component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
