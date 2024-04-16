<template>
  <div>
    <div class="login">
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
//  const username=ref( );
//   const password=ref( ); 

function notLogin(username, password){
  console.log(username);
  console.log(password);
}
 
   async function signUpNewUser() {
 const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
    },
  )}  

//   async function signInWithEmail() {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: 'example@email.com',
//     password: 'example-password'

    
//   })
// }  
</script>

<style  scoped>

</style>