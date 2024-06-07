<script setup>
import { characters, lightCones } from '@/components/CharacterList.vue';
console.log(lightCones.length);
lightCones.forEach(element => {
  console.log(element.name);
  console.log(element.passive.pDescrip);
});
</script>

<template>
  <main>
    home page
  </main>
  <p> hello this is the home page
  </p>
  <h4>
  </h4>
</template>