<template>
  <div>

  </div>
</template>

<script>
//if character is obtained, then display them; 
//then stats vary with level + relics; so addition; 
//display of other stats ???????

//import characters from another file; then import info from the gacha???; then use if else statements to display each character (colored if obtained; greyscale if not).
import { characters } from '@/components/CharacterList.vue'
console.log(characters.length);
for(let i=0; i<characters.length; i++){
  let name = characters[i].name;
  let element = characters[i].element;
  let pathway = characters[i].path;
  console.log(name, "'s element is", element, "and is part of", pathway);
}
</script>

<style scoped>

</style>