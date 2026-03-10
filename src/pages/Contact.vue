<script setup lang="ts">
const phoneNumber = "2771XXXXXXX"; // replace with your real number
const whatsappMessage = encodeURIComponent(
  "Hi G24, I would like to order LPG gas delivery.",
);

const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
</script>

<template>
  <div class="contact-page">
    <!-- HERO -->
    <section class="contact-hero">
      <h1>Contact G24 LPG Gas Delivery</h1>
      <p>
        Need a fast LPG gas refill or new gas cylinder in Cape Town? Contact G24
        for quick and reliable gas delivery.
      </p>
    </section>

    <!-- CONTACT CARDS -->

    <section class="contact-grid">
      <div class="contact-card">
        <div class="icon">📞</div>
        <h3>Call Us</h3>
        <p class="info">071 XXX XXXX</p>
        <p class="sub">Speak directly with our team to order LPG gas.</p>
      </div>

      <div class="contact-card">
        <div class="icon">📍</div>
        <h3>Delivery Area</h3>
        <p class="info">Cape Town</p>
        <p class="sub">
          We deliver LPG gas cylinders across Cape Town and surrounding areas.
        </p>
      </div>

      <div class="contact-card whatsapp">
        <div class="icon">💬</div>
        <h3>WhatsApp Orders</h3>
        <p class="sub">Order your LPG gas refill instantly using WhatsApp.</p>

        <a :href="whatsappLink" target="_blank">
          <button class="whatsapp-btn">Order Gas on WhatsApp</button>
        </a>
      </div>
    </section>

    <!-- CTA -->

    <section class="contact-cta">
      <h2>Order LPG Gas Today</h2>
      <p>
        Fast LPG gas delivery for homes, restaurants, and businesses in Cape
        Town.
      </p>

      <router-link to="/products">
        <button class="primary-btn">Browse Gas Cylinders</button>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
/* PAGE */

/* .contact-page {
  padding-bottom: 80px;
} */

/* HERO */

.contact-hero {
  text-align: center;
  padding: 47px 20px;
  background: linear-gradient(135deg, #fe8a1e, #fcb870);
  color: white;
}

.contact-hero h1 {
  font-size: 40px;
  margin-bottom: 15px;
}

.contact-hero p {
  max-width: 700px;
  margin: auto;
  font-size: 18px;
  opacity: 0.95;
}

/* GRID */

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
}

/* CARD */

.contact-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.icon {
  font-size: 34px;
  margin-bottom: 10px;
}

.contact-card h3 {
  margin-bottom: 10px;
}

.info {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
}

.sub {
  color: #6b7280;
  font-size: 14px;
}

/* WHATSAPP */

.whatsapp-btn {
  margin-top: 15px;
  background: #25d366;
  color: white;
  border: none;
  padding: 14px 22px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.whatsapp-btn:hover {
  background: #1ebe5d;
}

/* CTA */

.contact-cta {
  text-align: center;
  background: #0f172a;
  color: white;
  padding: 19px 20px;
}

.contact-cta h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.contact-cta p {
  margin-bottom: 25px;
  opacity: 0.9;
}

.primary-btn {
  background: #fe8a1e;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.primary-btn:hover {
  background: #e6760f;
}
</style>
