<script setup>
import { useCart } from "../store/cart";

const { items, total, removeFromCart } = useCart();

const pay = () => {
  const yoco = new window.YocoSDK({
    publicKey: "YOUR_PUBLIC_KEY",
  });

  yoco.showPopup({
    amountInCents: total.value * 100,
    currency: "ZAR",
    name: "G24 LPG Gas",
    description: "Gas Delivery Payment",
    callback: function (result) {
      if (result.error) {
        alert("Payment failed.");
      } else {
        alert("Payment successful!");
      }
    },
  });
};
</script>

<template>
  <div class="checkout-page">
    <div class="checkout-container">
      <!-- ORDER SUMMARY -->

      <div class="order-summary">
        <h2>Your Order</h2>

        <div v-for="(item, index) in items" :key="index" class="order-item">
          <div class="item-info">
            <h4>{{ item.name }}</h4>
            <p>R{{ item.price }}</p>
          </div>

          <button class="remove-btn" @click="removeFromCart(index)">✕</button>
        </div>

        <div v-if="items.length === 0" class="empty">Your cart is empty</div>

        <div class="total">
          <span>Total</span>

          <span class="total-price"> R{{ total }} </span>
        </div>

        <button class="pay-btn" @click="pay" :disabled="items.length === 0">
          Pay Securely
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
}

.checkout-container {
  width: 100%;
  max-width: 700px;
}

.order-summary {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

.order-summary h2 {
  margin-bottom: 30px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.item-info h4 {
  margin: 0;
}

.item-info p {
  color: #6b7280;
}

.remove-btn {
  border: none;
  background: #fee2e2;
  color: #dc2626;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
}

.total-price {
  color: #2563eb;
}

.pay-btn {
  width: 100%;
  margin-top: 30px;
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.pay-btn:hover {
  background: #1d4ed8;
}

.pay-btn:disabled {
  background: #cbd5f5;
  cursor: not-allowed;
}

.empty {
  padding: 20px 0;
  text-align: center;
  color: #6b7280;
}
</style>
