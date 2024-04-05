<template>
  <div class="login">
    async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}

<!--     <h2>Magic Link</h2>

<p>come gamble</p>
<p><a href="{{ .ConfirmationURL }}">Log In</a></p> -->
  </div>
</template>

<script>

</script>

<style  scoped>

</style>