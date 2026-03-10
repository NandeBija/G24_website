<script setup lang="ts">
import { useCart, type Product } from "../store/cart";

const { addToCart } = useCart();

const products = [
  {
    id: 1,
    name: "9kg Gas Cylinder",
    price: 450,
    image: "/src/assets/cylinders/9kg.png",
    description: "Perfect for homes and small cooking needs.",
  },
  {
    id: 2,
    name: "19kg Gas Cylinder",
    price: 950,
    image: "/src/assets/cylinders/19kg.png",
    description: "Ideal for families and regular daily cooking.",
  },
  {
    id: 3,
    name: "48kg Gas Cylinder",
    price: 2100,
    image: "/src/assets/cylinders/48kg.png",
    description: "Best for restaurants and businesses.",
  },
];

const orderProduct = (product: Product) => {
  addToCart(product);
  //   alert(product.name + " added to cart");
};
</script>

<template>
  <div class="products-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>Gas Delivered to Your Door</h1>
        <p>Order gas in minutes and get fast delivery anywhere in Cape Town.</p>
      </div>
    </section>

    <!-- PRODUCT GRID -->
    <section class="products">
      <h2>Choose Your Cylinder</h2>

      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" class="product-image" />

          <h3>{{ product.name }}</h3>

          <p class="description">
            {{ product.description }}
          </p>

          <div class="price">R{{ product.price }}</div>

          <button class="order-btn" @click="orderProduct(product)">
            Order Now
          </button>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->

    <section class="cta">
      <h2>Order LPG Gas Today</h2>

      <p>Get fast delivery in selected area in Cape Town.</p>

      <router-link to="/products">
        <button class="primary-btn">Browse Products</button>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.products-page {
  background: #f8fafc;
}

/* HERO */

.hero {
  background: linear-gradient(135deg, #fe8a1e, #fcb870);
  color: white;
  padding: 28px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 18px;
  opacity: 0.9;
}

/* PRODUCTS */

.products {
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
}

.products h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
}

/* GRID */

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

/* CARD */

.product-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 120px;
  margin-bottom: 20px;
}

.product-card h3 {
  margin-bottom: 10px;
  font-size: 22px;
}

.description {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 15px;
}

.price {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2563eb;
}

/* BUTTON */

.order-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;
}

.order-btn:hover {
  background: #1d4ed8;
}

/* CTA */

.cta {
  text-align: center;
  padding: 19px 20px;
  background: #0f172a;
  color: white;
}

.primary-btn {
  background: #fe8a1e;
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
}
</style>
