<template>
    <div class="displayChar">
      <img class ="imageFull" :src="character.fullBody"/>
      <div class="charinfo">
        <h2>{{ character.name }}</h2>
        <h6 class="level"> Lv. 80/80 </h6>
        <div class="statCon">
          <h4 class="stats">HP: {{ character.baseStats.HP }}</h4>
          <h4 class="stats">ATK: {{ character.baseStats.ATK }}</h4>
          <h4 class="stats">DEF: {{ character.baseStats.DEF }}</h4>
          <h4 class="stats">Speed: {{ character.baseStats.SPD }}</h4>
          <h4 class="stats">Crit Rate: {{ character.advStats.CR }}%</h4>
          <h4 class="stats">Crit DMG: {{ character.advStats.CD }}%</h4>
        </div>
        <p class="cDesc"> {{ character.desc }}</p>
      </div>
    </div>
    <div class="lightCC">
      <div class="lightinv"></div>
      <button class="lightB" @click="disp"> Insert Lightcone </button>
    </div>
</template>

<script>
import { characters, lightCones } from '../components/CharacterList.vue';
import IndividCard from '@/components/IndividCard.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const characterName = ref(route.params.name);
    const character = ref(characters.find(char => char.name === characterName.value));
    return { character };
  }
};
console.log("hi");
function disp(){
  console.log("button clicked");
}
/* function things(e){
  e.preventDefault();
  display();
  cards();
};
function display(){
}
function cards(){
  lightCones.forEach((e)=> console.log(e.name));
} */
</script>

<style scoped>
*{
  box-sizing: border-box;
}
h2{
  margin: 0;
}
.lightCC{
  background-color: white;
  position: fixed;
  width: max-content;
  bottom: 10%;
  right: 15%;
}
.level{
  margin: 0%;
  padding: 0%;
  font-size: 100%;
}
.imageFull{
  position: absolute;
  left: 10%;
  top: 10%;
  pointer-events: none;
  width: 65%;
}
.charinfo{
  margin: 3%;
  width: 40%;
  position: absolute;
  right: 50px;
  top: 100px;
  background-color: #00000021;
}
.statCon{
  padding: 3%;
  text-align: justify;
  width: max-content;
  margin: 0 auto;
  position: relative;
}
.stats{
  margin: 0;
  text-align: justify;
}
.cDesc{
  width: 100%;
  text-align: left;
  position: absolute;
  right: 50;
}
</style>