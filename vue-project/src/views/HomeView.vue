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
    <!-- <button @click.prevent="signUp">Sign Up</button> -->
    <!-- <login
    v-model:username="username"
    v-model:password="password"
    /> -->
  </div>
    
</template>

<script>
// const { storeToRefs } = require('pinia')
import { useUserStore } from '@main.js'

// access the `store` variable anywhere in the component ✨
const store = useUserStore()

//  const username= defineModel('username')
//  const password= defineModel('password')

function login(){
  async function signUpNewUser() {
 const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
    },
  )}  

  
//      async function signInWithEmail() {
//    const signIn = await supabase.auth.signInWithPassword({}
//     try {
//       const {user, session, error} =await supabase.auth.signIn{(
//       email: email.value,
//       password: password.value,
//     )};
//       if (error){
//         console.log(error)
//       }
//       else{
        

//       }

//     }

      
//    )
//  }  


//  async function signInWithEmail(){
//   const signin = await supabase.auth.signInWithPassword({
//     try:{
//         const (user, session, error) = await supabase.auth.signIn{(
//           try{
//             const {user, session, error} =await supabase.auth.signIn{(
 
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


console.log(signUpNewUser)
console.log(signInWithEmail)
}





//  const loggedInUserId = 'd0714948'
// const { data, error } = await supabase.loggedInUserId
//   .from('users')
//   .select('user_id, name')
//   .eq('user_id', loggedInUserId)

  // const { data, error } = await supabase.from('users').select('user_id, name')

</script>

<style  scoped>

</style>