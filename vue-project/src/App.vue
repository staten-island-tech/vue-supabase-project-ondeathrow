<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
      <nav>
        <RouterLink to="/character">Inventory</RouterLink>
        <RouterLink to="/">Wish</RouterLink>
        <RouterLink to="/Relics">Relics</RouterLink>
      </nav>
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
body {
  margin: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px;
  z-index: 1000;
  background-color: #ffffff;
  height: 40px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.routerstuff {
  padding-top: 60px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }

  nav {
    margin-left: 0; 
    font-size: 1rem;
    padding: 0; 
    margin-top: 0;
  }
}
</style>