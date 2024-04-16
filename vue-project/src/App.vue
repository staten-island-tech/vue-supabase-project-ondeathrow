<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/profile">Inventory</RouterLink>
    </div>
  <RouterView />
</template>

<style scoped>
/* .wrapper{
  background-color: #8d8ba7;
  height: 600px;
}
a{
  margin: auto 5%;
} */
</style>
