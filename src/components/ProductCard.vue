<script setup lang="ts">
import { useCart } from "../store/cart";

interface Product {
  id: number;
  name: string;
  price: number;
}

const props = defineProps<{
  product: Product;
}>();

const { addToCart } = useCart();
</script>

<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <p class="price">R{{ product.price }}</p>

    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.price {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

button {
  background: #ffb800;
  padding: 10px 16px;
  font-weight: bold;
  border-radius: 6px;
}
</style>
