<template>
  <div class="register-page">
    <div class="register-wrapper">
      <!-- LEFT IMAGE SECTION -->
      <div class="register-hero">
        <img src="../../src/assets/vector img/Register2.png" alt="Register" />
        <h2>Create Your Account</h2>
        <p>Fast gas delivery starts here</p>
      </div>

      <!-- FORM SECTION -->
      <div class="register-card">
        <h1>Create Account</h1>

        <form @submit.prevent="register">
          <div class="input-group">
            <input v-model="fullName" type="text" required />
            <label>Full Name</label>
          </div>

          <div class="input-group">
            <input v-model="email" type="email" required />
            <label>Email</label>
          </div>

          <div class="input-group">
            <input v-model="phone" type="tel" maxlength="10" required />
            <label>Cellphone Number</label>
          </div>

          <div class="input-group">
            <input v-model="password" type="password" required />
            <label>Password</label>
          </div>

          <div class="input-group">
            <input v-model="confirmPassword" type="password" required />
            <label>Confirm Password</label>
          </div>

          <p v-if="passwordMismatch" class="error">Passwords do not match</p>

          <button class="primary-btn" :disabled="loading">
            {{ loading ? "Creating Account..." : "Create Account" }}
          </button>
        </form>

        <p class="switch">
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

const router = useRouter();

const fullName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");

const loading = ref(false);
const passwordMismatch = ref(false);

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const register = async () => {
  passwordMismatch.value = false;

  if (!isValidEmail(email.value)) {
    alert("Please enter a valid email");
    return;
  }

  if (password.value !== confirmPassword.value) {
    passwordMismatch.value = true;
    return;
  }

  loading.value = true;

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        full_name: fullName.value,
        phone: phone.value,
        user_type: "Customer",
      },
      emailRedirectTo: window.location.origin + "/login",
    },
  });

  loading.value = false;

  if (error) {
    alert(error.message);
    return;
  }

  alert("Check your email to confirm your account.");
  router.push("/login");
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.register-wrapper {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.register-hero {
  background: #111827;
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.register-hero img {
  width: 100%;
  margin-bottom: 6px;
}

.register-card {
  padding: 50px;
}

.register-card h1 {
  margin-bottom: 30px;
}

.input-group {
  position: relative;
  margin-bottom: 22px;
}

.input-group input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 14px;
  background: white;
  padding: 0 6px;
  color: #888;
  transition: 0.2s;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: -8px;
  font-size: 12px;
  color: #2563eb;
}

.primary-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

.primary-btn:hover {
  background: #1d4ed8;
}

.primary-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch {
  margin-top: 20px;
  text-align: center;
}

.switch a {
  color: #2563eb;
  font-weight: 600;
}

.error {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  .register-wrapper {
    grid-template-columns: 1fr;
  }

  .register-hero {
    display: none;
  }
}
</style>
