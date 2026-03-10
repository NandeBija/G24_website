<template>
  <div class="login-page">
    <div class="login-wrapper">
      <!-- LEFT HERO -->
      <div class="login-hero">
        <img src="../../src/assets/vector img/Login2.png" alt="Welcome" />
        <h2>Welcome Back</h2>
        <p>Log in to continue ordering gas</p>
      </div>

      <!-- LOGIN CARD -->
      <div class="login-card">
        <h1>Login</h1>

        <form @submit.prevent="login">
          <!-- Email -->
          <div class="input-group">
            <span class="icon"></span>
            <input
              v-model="email"
              type="email"
              placeholder="Email address"
              required
            />
          </div>

          <!-- Password -->
          <div class="input-group">
            <span class="icon"></span>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p v-if="errorMessage" class="error">
            {{ errorMessage }}
          </p>

          <!-- Login Button -->
          <button class="primary-btn" :disabled="loading">
            {{ loading ? "Logging in..." : "Login" }}
          </button>
        </form>

        <div class="auth-footer">
          <p>
            Don't have an account?
            <router-link to="/register">Create one</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

const login = async () => {
  errorMessage.value = "";
  loading.value = true;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  loading.value = false;

  if (error) {
    errorMessage.value = mapAuthError(error.message);
    return;
  }

  router.push("/");
};

const mapAuthError = (message) => {
  if (message.includes("Invalid login credentials")) {
    return "Incorrect email or password.";
  }

  if (message.includes("Email not confirmed")) {
    return "Please confirm your email before logging in.";
  }

  return message || "Something went wrong. Please try again.";
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.login-wrapper {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.login-hero {
  background: #111827;
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login-hero img {
  width: 100%;
  margin-bottom: 7px;
}

.login-card {
  padding: 50px;
}

.login-card h1 {
  margin-bottom: 30px;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
}

.input-group input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
}

.icon {
  margin-right: 10px;
  font-size: 18px;
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

.auth-footer {
  margin-top: 20px;
  text-align: center;
}

.auth-footer a {
  color: #2563eb;
  font-weight: 600;
}

.error {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  .login-wrapper {
    grid-template-columns: 1fr;
  }

  .login-hero {
    display: none;
  }
}
</style>
