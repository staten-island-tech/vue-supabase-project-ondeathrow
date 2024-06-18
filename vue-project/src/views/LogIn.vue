<template> 
    <div> 
        <div class="signup">
            <h1>sign up over here</h1> 
            <form @submit.prevent="register()">
                <label for="email">email</label>
                <div class="signupemail">
                <input type="email" v-model="email" id="email" /> 
                </div>
                <label for="password">password</label>
                <div class="signuppass">
                <input type="password" v-model="password" id="password" /> 
                </div>
                <button type="submit">Sign Up</button>
            </form> 
        </div>
  
        <div class="signin"> 
            <h1>sign in over here</h1> 
            <form @submit.prevent="login()"> 
                <label for="loginemail">email</label>
                <div class="signinemail">
                <input type="email" v-model="user" id="loginemail" />
                </div>
                <label for="loginpassword">password</label>
                <div class="signinpass">
                <input type="password" v-model="loginpass" id="loginpassword" />
                </div>
                <button type="submit">Sign In</button>
            </form> 
        </div> 
    </div> 
</template>
                              
<script setup>
import {supabase} from "../lib/supabaseClient.js"
import { ref } from "vue" 

const email = ref(""); 
const password = ref("");
const user = ref("");
const loginpass = ref(""); 

async function register() {
    console.log("hii");
    try {
        const { error } = await supabase.auth.signUp({
            email: email.value, 
            password: password.value,
        });
        console.log(email.value);
        await insertData();
        if (error) throw error;
    } catch (error) {
        console.error(error);
    }
}

async function login() {
    try {
        console.log("abc");
        const { data, error: insertError } = await supabase.auth.signIn({
            email: user.value, 
            password: loginpass.value,
        });
        console.log(user.value);
        console.log(loginpass.value);
        console.log(data);
    } catch (insertError) {
        console.log(insertError);
    }
}

async function insertData() {
    console.log("add");
    try {
        const { error } = await supabase
            .from("users")
            .insert([{ user_name: email.value, user_pass: password.value }]) 
            .select();
        console.log(email.value);
        console.log(password.value);
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped>
.signupemail{
  color: #352D39
}
.signuppass{
  color: #352D39
}
.signinemail{
  color: #352D39
}
.signinpass{
  color: #352D39
}
</style>  
