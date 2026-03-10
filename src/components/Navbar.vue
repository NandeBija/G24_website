<script setup lang="ts">
import { useCart } from "../store/cart";
import { computed } from "vue";

const { items } = useCart();
const itemCount = computed(() => items.length);
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">G24</router-link>
    </div>

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/checkout" class="cart">
        🛒 ({{ itemCount }})
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.logo a {
  color: #0f172a;
  font-weight: 700;
  font-size: 22px;
  text-decoration: none;
}

.links a {
  color: #334155;
  margin-left: 24px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #fe8a1e;
}

.cart {
  font-weight: 700;
  color: #fe8a1e;
}
</style>
