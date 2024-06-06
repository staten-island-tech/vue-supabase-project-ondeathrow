<template>
  <div>
    <div class="signup">
      <h1>sign up here</h1>
      <form @submit.prevent="register()">
        <label for="email">email</label>
        <input type="email" v-model="email" id="email" />
        <label for="password">password</label>
        <input type="password" v-model="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { supabase } from "../lib/supabaseClient.js";
import { ref } from "vue";
const email = ref("");
const password = ref("");

async function register() {
  try {
    console.log("aaa");
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log(email.value);
    console.log(password.value);
    console.log(data);
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped></style>
