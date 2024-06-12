<template> 
      ‹div> 
            ‹div class = "signup">
                  <h1>sign up over here</h1> 
                  <form @submit.prevent "register")
                        ‹label for="email"›email‹/label›
                        <input type="email" v-model="email" id="email" /> ‹label for="password"›password‹/label›
                        <input type="password" v-model="password" id="password" /> 
                        ‹button type="submit"›Sign Up‹/button>
                  </form> 
            </div>
      
            ‹div class-"signin"› 
                  <h1>sign in over here</h1> 
                  <form @submit.prevent="login("› 
                        ‹label for="email"›email‹/label>
                        <input type="loginemail" v-model="user" id="loginemail" /> <label for="password"›password‹/label>
                        <input type= "loginpassword" v-model="loginpass" id="loginpassword" /> 
                        <button type="submit"›Sign In‹/buttons
                  </form> 
            </div> 
      </div> 
</template>
<script setup>
      
import { supabase } from "../lib/supabaseclient.js" 
import { ref } from "vue" 
const email = ref(""); 
const password = ref("");
const user = ref("");
const loginpass = ref ("") ;
                       
async function register() {
console. log("hii").
try {
const { error } = await supabase.auth. signUp({
      <div class="signup">
        <h1>sign up over here</h1>
        <form @submit.prevent="register()">
        <label for="email">email</label>
        <input type="email" v-model="email" id="email" />
        <label for="password">password</label>
        <input type="password" v-model="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
  </div>

    <div class="signin">
      <h1>sign in over here</h1>
      <form @submit.prevent="login()">
        <label for="email">email</label>
        <input type="email" v-model="user" id="email" />
        <label for="password">password</label>
        <input type="password" v-model="login" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>

</template>

<script setup>

import { supabase } from "../lib/supabaseClient.js";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const user = ref("");
const login = ref("");

async function insertData() {
  const {data: insertData, error: insertError} = await supabase 
  .from('users')
  .insert([
    { user_name: 'email.value', user_pass: 'password.value' },
  ])
  if (insertError) {
    console.log(insertError)
  } else {
    console.log(userData)
  }
}


async function register() {
  try {
    // console.log("aaa");
    const { data, error: insertError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    });
    console.log(email.value);
    console.log(password.value);
    console.log(data);
       user.value = data
      //const { user, error } = await supabase
      insertData()
  // .select()
    if (error) throw error;
  } catch (error) {
    console.error(error);
  
  async function login() {
  try {
    console.log("abc");
    const { data: insertData, error: insertError } = await supabase.auth.signInWithPassword({
      email: user.value,
      password: login.value,
    });
    console.log(user.value);
    console.log(login.value);
    console.log(data);
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
}
  }
}
</script>

