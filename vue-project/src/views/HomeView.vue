import { supabase } from "../lib/supabaseClient.js";
import { ref } from "vue";
const email = ref("");
const password = ref("");

    <div class="signup">
      <h1>sign over here</h1>
      <form @submit.prevent="register()">
        <label for="email">email</label>
        <input type="email" v-model="email" id="email" />
        <label for="password">password</label>
        <input type="password" v-model="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>

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



    <div class="signin">
      <h1>sign over here</h1>
      <form @submit.prevent="login()">
        <label for="email">email</label>
        <input type="email" v-model="email" id="email" />
        <label for="password">password</label>
        <input type="password" v-model="password" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
  
  async function login() {
  try {
    console.log("abc");
    const { data, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    console.log(email.value);
    console.log(password.value);
    console.log(data);
    if (error) throw error;
  } catch (error) {
    console.error(error);




