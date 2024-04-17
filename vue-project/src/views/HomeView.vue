<template>
  <div>
    <div class="login">
      <h1>sign up here</h1>
      <form name="get in right now" @submit.prevent="login(username, password)">
          <label for="username">username</label>
          <input id="username" text="username" v-model="username"/>
          <label for="password">password</label>
          <input id="password" text="password" v-model="password"/>
          <input type="submit" value="enter"/>
      </form>
    </div>
  </div>
    
</template>

<script>
const username= defineModel('username')
const password= defineModel('password')

function login(username, password){
  console.log(username);
  console.log(password);
}
 
   async function signUpNewUser() {
 const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
    },
  )}  

     async function signInWithEmail() {
   const { data, error } = await supabase.auth.signInWithPassword({
     email: 'example@email.com',
     password: 'example-password'

    
   })
 }  
</script>

<style  scoped>

</style>