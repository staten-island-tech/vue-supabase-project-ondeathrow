<template>
  <div class="displayChar">
    <img class="imageFull" :src="character.fullBody" />
    <p class="cDesc">{{ character.desc }}</p>
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
      <button class="lightB" @click="togglePopup">{{ 'Equip Lightcone' }}</button>
      <div v-if="character.equippedLightcone" class="equipped-lightcone">
        <div class="lightcone-details">
          <img :src="character.equippedLightcone.image" :alt="character.equippedLightcone.name" />
          <div>
            <h4>{{ character.equippedLightcone.name }}</h4>
            <div class="lightcone-stats">
              <p>HP: {{ character.equippedLightcone.stats.HP }}</p>
              <p>ATK: {{ character.equippedLightcone.stats.ATK }}</p>
              <p>DEF: {{ character.equippedLightcone.stats.DEF }}</p>
              <div class="lightcone-description">
                <h6> {{ character.equippedLightcone.passive.pName }} </h6>
                <p> {{ character.equippedLightcone.passive.pDescrip }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lightCC">
    <div v-if="showPopup" class="popup">
      <div class="lightcone-flex">
        <!-- selected -> if selectedLightcone exists & selected = lightcone.name ; unobtained is when lightcone.obtained is falsewje -->
        <div v-for="lightcone in lightCones" :key="lightcone.name" class="lightcone-card" :class="{ selected: selectedLightcone && selectedLightcone.name === lightcone.name, unobtained: !lightcone.obtained }" @click="selectLightcone(lightcone)">
          <img draggable="false" :src="lightcone.image" :alt="lightcone.name" />
          <h4 class="lightconeNameP">{{ lightcone.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { characters, lightCones as lightConesData } from '../components/CharacterList.vue';

export default {
  setup() {
    const route = useRoute();
    const characterName = ref(route.params.name);
    const character = ref(characters.find(char => char.name === characterName.value));
    const lightCones = ref(lightConesData);
    const showPopup = ref(false);
    const selectedLightcone = ref(null);

    const equipLightcone = () => {
      if (!selectedLightcone.value.obtained) {
        console.log('Cannot equip an unobtained lightcone');
        return;
      }
      if (character.value.equippedLightcone) {
        const currentLightcone = character.value.equippedLightcone;
        character.value.baseStats.HP -= currentLightcone.stats.HP;
        character.value.baseStats.ATK -= currentLightcone.stats.ATK;
        character.value.baseStats.DEF -= currentLightcone.stats.DEF;
        currentLightcone.equip = false;
      }
      character.value.baseStats.HP += selectedLightcone.value.stats.HP;
      character.value.baseStats.ATK += selectedLightcone.value.stats.ATK;
      character.value.baseStats.DEF += selectedLightcone.value.stats.DEF;
      character.value.equippedLightcone = selectedLightcone.value;
      selectedLightcone.value.equip = true;
      console.log('Equipped lightcone:', selectedLightcone.value.name);
      console.log('New character stats:', character.value.baseStats);
    };

    // true or false? both true -> calls function; then hide and not hide pop up wjedekrt
    const togglePopup = () => {
      if (showPopup.value && selectedLightcone.value) {
        equipLightcone();
      }
      showPopup.value = !showPopup.value;
    };

    const selectLightcone = (lightcone) => {
      if (lightcone.obtained) {
        console.log('Selected lightcone:', lightcone.name);
        selectedLightcone.value = lightcone;
      } else {
        console.log('Cannot select an unobtained lightcone');
      }
    };
    return { character, lightCones, showPopup, selectedLightcone, togglePopup, selectLightcone };
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
h2{
  margin: 0;
}
.lightB{
  background-color: black;
}
.lightCC{
  background-color: white;
  width: max-content;
  bottom: 10%;
  right: 15%;
}
.level{
  margin: 0;
  padding: 0;
  font-size: 100%;
}
.imageFull{
  position: absolute;
  left: 5px;
  top: 10%;
  pointer-events: none;
  width: 65%;
}
.charinfo{
  padding: 2%;
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
.lightcone-description{
  font-size: 85%;
}
.lightcone-description h6{
  margin: 3% 0% 0% 0%;
  font-size: 130%;
}
.stats{
  margin: 0;
  text-align: justify;
}
.cDesc{
  width: 30%;
  padding: 1%;
  text-align: left;
  position: absolute;
  background-color: #00000029;
  top: 65%;
  left: 10;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.popup{
  position: fixed;
  top: 20%;
  left: 5%;
  width: 60%;
  height: 60%;
  background-color: black;
  box-shadow: 0 0 10px #00000080;
  z-index: 1000;
  overflow-y: auto;
}
.lightcone-flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.lightcone-card{
  width: 150px;
  margin: 10px;
  padding: 1% 2% 1% 2%;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.lightcone-card.selected{
  border: 2px solid #5e5e97;
}
.lightconeNameP{
  font-size: 85%;
}
.lightcone-card.unobtained{
  opacity: 0.5;
  cursor: not-allowed;
}
.lightcone-card img{
  width: 100%;
  height: auto;
}
.equipped-lightcone{
  margin: 0 auto;
  height: max-content;
  position: absolute;
  top: 340px;
  right: 0%;
  width: 100%;
  text-align: center;
  align-items: center;
  background-color: #00000019;
}
.lightcone-details{
  display: flex;
  align-items: center;
  height: 50%;
  position: relative;
}
.lightcone-details img{
  width: 40%;
  height: auto;
  padding: 1%;
}
.lightcone-details p{
  margin: 0 auto;
  padding: 0;
}
.lightcone-stats{
  font-size: 90%;
  margin: 0;
  padding: 0;
}
</style>