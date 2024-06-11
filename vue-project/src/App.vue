<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Wish</RouterLink>
        <RouterLink to="/character">Index</RouterLink>
      </nav>
    </header>
    <div class="routerstuff">
      <RouterView />
    </div>
  </div>
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
  background-color: #1f1d31;
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
  color: white;
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
 
 