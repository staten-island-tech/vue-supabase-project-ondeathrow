<template>
   <router-link :to="charPath" class="card">
    <img class="image-of-char" :src="Character.icon" :alt="Character.name"/>
    <h2 class="char-name">{{ Character.name }}</h2>
    <img class="star-rare" :src="Character.rarityicon"/>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  Character: Object,
});

const charPath = computed(()=>{
  return `character/${props.Character.name}`
});
</script>

<style scoped>
.char-name{
  font-size: 100%;
  margin: 0% 3% 0% 3%;
  color: #ffffff;
}
.card{
  margin: 1rem;
  font-size: 100%;
  background-color: #10162ead;
  border: 0.2rem solid #a98e61;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 14%;
  height: max-content;
  transition: 0.5s;
}
.card:hover{
  background-color: #18265f5b;
  border: 0.2rem solid #d6be91;
}
.image-of-char{
  width: 60%;
  filter: grayscale(100);
  z-index: 1;
}
.star-rare{
  height: 1rem;
}
</style>