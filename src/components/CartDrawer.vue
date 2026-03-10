<script setup lang="ts">
import { useCart } from "../store/cart";
import { ref } from "vue";

const isOpen = ref(false);
const { items, removeFromCart, total } = useCart();

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <!-- <button class="floating-cart" @click="toggle">🛒</button> -->

  <div v-if="isOpen" class="drawer">
    <h2>Your Cart</h2>

    <div v-if="items.length === 0">Cart is empty</div>

    <div v-for="(item, index) in items" :key="index" class="item">
      {{ item.name }} - R{{ item.price }}
      <button @click="removeFromCart(index)">X</button>
    </div>

    <h3>Total: R{{ total }}</h3>

    <router-link to="/checkout">
      <button class="checkout-btn">Checkout</button>
    </router-link>
  </div>
</template>

<style scoped>
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 99;
}

/* DRAWER */
.drawer {
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100%;
  background: white;
  padding: 24px;
  z-index: 100;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease;
}

/* Animation */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.floating-cart {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #0a1f44;
  color: white;
  padding: 15px;
  border-radius: 50%;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: white;
  padding: 20px;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
}

.item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.checkout-btn {
  background: #ffb800;
  padding: 10px;
  width: 100%;
  font-weight: bold;
}
</style>
