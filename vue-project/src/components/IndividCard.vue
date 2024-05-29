<template>
</template>

<script setup>
import { characters, lightCones } from './CharacterList.vue';

function thing(){
  const chaSt = characters.baseStats;
  const addHP = lightCones.stats.HP;
  const addDEF = lightCones.stats.DEF;
  const addATK = lightCones.stats.ATK;
  if(lightCones.equip === true){
    const chaSt =+ addHP;
  }
}
</script>
 
<style scoped>
</style>