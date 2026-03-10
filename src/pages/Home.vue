<template>
  <!-- HERO -->

  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1>Fast & Reliable LPG Gas Delivery</h1>

        <p>
          Order LPG gas cylinders online and get safe delivery to your home or
          business anywhere in Cape Town.
        </p>

        <div class="hero-buttons">
          <router-link to="/products">
            <button class="primary-btn">Order Gas</button>
          </router-link>

          <router-link to="/register">
            <button class="secondary-btn">Create Account</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- QUICK SERVICES -->

  <section class="services">
    <div class="services-header">
      <h2>Fast Gas Delivery in Cape Town</h2>

      <p>
        Order safe, affordable LPG gas cylinders online and get fast delivery
        anywhere in Cape Town. Perfect for homes, restaurants, and businesses.
      </p>
    </div>

    <div class="cards">
      <!-- 9KG -->

      <div class="card">
        <img
          src="@/assets/cylinders/9kg.png"
          alt="9kg LPG Gas Cylinder Cape Town Delivery"
        />

        <h3>9kg LPG Cylinder</h3>

        <p>
          Ideal for small households, camping, and everyday cooking. Quick and
          affordable LPG gas delivery across Cape Town.
        </p>

        <router-link to="/products" class="order-btn">
          Order 9kg Gas
        </router-link>
      </div>

      <!-- 19KG -->

      <div class="card">
        <img
          src="@/assets/cylinders/19kg.png"
          alt="19kg LPG Gas Cylinder Delivery Cape Town"
        />

        <h3>19kg LPG Cylinder</h3>

        <p>
          Perfect for family homes that cook frequently. Reliable gas supply
          with fast LPG delivery.
        </p>

        <router-link to="/products" class="order-btn">
          Order 19kg Gas
        </router-link>
      </div>

      <!-- 48KG -->

      <div class="card">
        <img
          src="@/assets/cylinders/48kg.png"
          alt="48kg LPG Gas Cylinder for Restaurants Cape Town"
        />

        <h3>48kg LPG Cylinder</h3>

        <p>
          Best for restaurants, catering businesses, and commercial kitchens
          that require large gas supply.
        </p>

        <router-link to="/products" class="order-btn">
          Order 48kg Gas
        </router-link>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->

  <section class="how">
    <div class="section-header">
      <h2>How G24 Gas Delivery Works</h2>
      <p>
        Ordering LPG gas in Cape Town is simple with G24. Choose your cylinder,
        select refill or new cylinder, and get fast delivery to your door.
      </p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-icon">🛒</div>
        <h3>Choose Your Cylinder</h3>
        <p>
          Browse our LPG cylinders including 9kg, 19kg and 48kg options suitable
          for homes, restaurants and businesses.
        </p>
      </div>

      <div class="step">
        <div class="step-icon">♻️</div>
        <h3>Select Refill or New Cylinder</h3>
        <p>
          Choose whether you want a <strong>gas refill</strong> for your
          existing cylinder or buy a
          <strong>new cylinder filled with LPG gas</strong>.
        </p>
      </div>

      <div class="step">
        <div class="step-icon">💳</div>
        <h3>Secure Checkout</h3>
        <p>
          Pay safely online using our encrypted payment system for quick and
          secure transactions.
        </p>
      </div>

      <div class="step">
        <div class="step-icon">🚚</div>
        <h3>Fast LPG Delivery</h3>
        <p>
          Our delivery team brings your LPG gas directly to your home or
          business anywhere in Cape Town.
        </p>
      </div>
    </div>
  </section>

  <!-- WHY G24 -->

  <section class="benefits">
    <div class="section-header">
      <h2>Why Choose G24 Gas Delivery</h2>
      <p>
        We provide reliable LPG gas delivery in Cape Town with safety, speed and
        convenience for homes and businesses.
      </p>
    </div>

    <div class="benefit-grid">
      <div class="benefit">
        <div class="benefit-icon">🚚</div>
        <h3>Fast Delivery</h3>
        <p>Same-day gas delivery available in selected Cape Town areas.</p>
      </div>

      <div class="benefit">
        <div class="benefit-icon">🔒</div>
        <h3>Safe & Certified</h3>
        <p>
          All gas cylinders handled and transported according to certified
          safety standards.
        </p>
      </div>

      <div class="benefit">
        <div class="benefit-icon">💳</div>
        <h3>Secure Payments</h3>
        <p>Pay safely online using our secure encrypted payment gateway.</p>
      </div>

      <div class="benefit">
        <div class="benefit-icon">📦</div>
        <h3>Reliable Supply</h3>
        <p>Never run out of cooking gas again with dependable delivery.</p>
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
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import L from "leaflet";
</script>

<style scoped>
/* HERO */

.hero {
  height: 484px;
  background-image: url("../src/assets/Gas_delivery.jpg");
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(254, 138, 30, 0),
    rgba(252, 184, 112, 0.011)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 700px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
}

.hero-buttons {
  margin-top: 30px;
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

.secondary-btn {
  background: #0f172a;
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: 10px;
  font-weight: 600;
  margin: 10px;
}

/* SERVICES */

.services {
  padding: 33px 20px;
  background: #f8fafc;
}

.services-header {
  text-align: center;
  max-width: 700px;
  margin: auto;
  margin-bottom: 50px;
}

.services-header h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.services-header p {
  color: #64748b;
  font-size: 18px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: auto;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.card img {
  width: 120px;
  margin-bottom: 20px;
}

.card h3 {
  margin-bottom: 10px;
  font-size: 22px;
}

.card p {
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 20px;
}

.order-btn {
  display: inline-block;
  padding: 12px 20px;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

.order-btn:hover {
  background: #1d4ed8;
}
/* SECTION HEADERS */

.section-header {
  text-align: center;
  max-width: 700px;
  margin: auto;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.section-header p {
  color: #64748b;
  font-size: 18px;
}

/* HOW IT WORKS */

.how {
  padding: 39px 20px;
  background: white;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: auto;
}

.step {
  background: #f8fafc;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  transition: 0.25s;
}

.step:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.step-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.step h3 {
  margin-bottom: 10px;
}

.step p {
  color: #6b7280;
}

/* BENEFITS */

.benefits {
  background: #f8fafc;
  padding: 39px 20px;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: auto;
}

.benefit {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  transition: 0.25s;
}

.benefit:hover {
  transform: translateY(-6px);
}

.benefit-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.benefit h3 {
  margin-bottom: 10px;
}

.benefit p {
  color: #6b7280;
}
/* CTA */

.cta {
  text-align: center;
  padding: 19px 20px;
  background: #0f172a;
  color: white;
}
</style>
