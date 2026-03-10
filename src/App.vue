<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import CartDrawer from "./components/CartDrawer.vue";
</script>

<template>
  <Navbar />
  <router-view />
  <CartDrawer />
</template>
