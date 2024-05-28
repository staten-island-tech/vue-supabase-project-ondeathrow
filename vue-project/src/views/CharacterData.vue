<template>
    <div class="displayChar">
        <h2>{{ character.name }}</h2>
        <img :src="character.icon"/>
        <p> {{ character.desc }}</p>
        <h4> Level 80 </h4>
        <div class="stats">
            <h4>HP: {{ character.baseStats.HP }}</h4>
            <h4>ATK: {{ character.baseStats.ATK }}</h4>
            <h4>DEF: {{ character.baseStats.DEF }}</h4>
            <h4>SPD: {{ character.baseStats.SPD }}</h4>
            <h4>TAUNT: {{ character.baseStats.TAUNT }}</h4>
        </div>
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
</script>

<style scoped>
*{
    background-color: #973232;
}
</style>