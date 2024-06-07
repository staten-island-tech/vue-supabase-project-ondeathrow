<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Wish</RouterLink>
        <RouterLink to="/about">Games</RouterLink>
        <RouterLink to="/Relics">Relics</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
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