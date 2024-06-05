<template>
   <router-link :to="charPath" class="card" draggable="false">
    <img draggable="false" class="image-of-char" :src="Character.icon" :alt="Character.name"/>
    <h2 draggable="false" class="char-name">{{ Character.name }}</h2>
    <img draggable="false" class="star-rare" :src="Character.rarityicon"/>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { characters } from './CharacterList.vue';
const props = defineProps({
  Character: Object,
});

const charPath = computed(()=>{
  return `character/${props.Character.name}`;
});

function colorscale(){
  for(let i=0; i<characters.length; i++){
    if(characters[i].obtained === true){
      document.querySelector(".card").classList.remove("unobtained");
      document.querySelector(".card").classList.add("obtained");
    } else {
      document.querySelector(".card").classList.remove("obtained");
      document.querySelector(".card").classList.add("unobtained");
    }
  }
}
</script>

<style scoped>
.char-name{
  font-size: 100%;
  margin: 0% 3% 0% 3%;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card{
  margin: 1rem;
  font-size: 100%;
  background-color: #10162ead;
  border: 0.2rem solid #a98e61;
  display: inline-block;
  width: calc(14%);
  height: max-content;
  transition: 0.5s;
  hyphens: auto;
  display: block;
}
.card:hover{
  background-color: #18265f5b;
  border: 0.2rem solid #d6be91;
}
.image-of-char{
  width: 60%;
  filter: grayscale(0);
  z-index: 1;
}
.star-rare{
  height: 1rem;
}
</style>