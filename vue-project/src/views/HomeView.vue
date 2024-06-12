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
      async function register) {
console.log ("hii");
try {
const { error } = await supabase.auth.signUp({
email: email.value, password: password. value,
3;
console. log (email.value) ;
await insertData;
if (error) throw error;
catch (error) {
console. error (error);
}
async function login.) {
try
console.log ("abc");
const data: insertData, error: insertError
await supabase.auth. signInkithPassword {
email: user. value, password: loganpass. value,
console. log (user ‚value);
console.log (loginpass .value) ;
console. log data;
catch insertError)
{
console. log (insertError);
async function insertData0 {
console.log ("add");
try {
const error ) = await supabase
•from("users")
insert (If user_name: email,value, user_pass: password.value 31) select ;
console. log (email.value);
console. log password.value);
catch (error) {
console.error (error).