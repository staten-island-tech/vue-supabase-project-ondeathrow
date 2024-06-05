<template>
  <div>
    <div class="login">
      <h1>sign up here</h1>
      <form name="login" @submit.prevent="login(username, password)">
          <label for="username">username</label>
          <input type="text" text="username" v-model="username"/>
          <label for="password">password</label>
          <input type="text" text="password" v-model="password"/>
          <input type="submit" value="enter"/>
      </form>
    </div>
    <button @click.prevent="signUp">Sign Up</button> 
    <!-- <login
    v-model:username="username"
    v-model:password="password"
    /> -->
  </div>
    
</template>

<script>
// const { storeToRefs } = require('pinia')
import { useUserStore } from ''

const store = useUserStore()
              
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  pinia,
})
//  const username= defineModel('username')
//  const password= defineModel('password')


function logup(){
  async function signUpNewUser() {
      const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
  options: {
    data: {
      username: 'John',
      age: 27,
    },
  },
  })

  const {data: { user },} = await supabase.auth.getUser()
let metadata = user.user_metadata



/* create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  first_name text,
  last_name text,

  primary key (id)
);

alter table public.profiles enable row level security; */



 }  


//  async function signInWithEmail(){
//   const signin = await supabase.auth.signInWithPassword({
//     try:{
//         const (user, session, error) = await supabase.auth.signIn{(
//           try{
//             const {user, session, error} =await supabase.auth.signIn{(
//             
//      )};
//           }
//         )
//         }
//     }
//   })
//  }
username(

)
password(

) 



// const { data, error } = await supabase.auth.signInWithIdToken({
//   provider: 'google',
//   token: 'your-id-token'
// })



}

console.log(logup)
console.log(signInWithEmail)



//  const loggedInUserId = 'd0714948'
// const { data, error } = await supabase.loggedInUserId
//   .from('users')
//   .select('user_id, name')
//   .eq('user_id', loggedInUserId)

  // const { data, error } = await supabase.from('users').select('user_id, name')

</script>

<style  scoped>

</style>
