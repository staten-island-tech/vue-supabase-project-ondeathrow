<template>
  <div class="container">
    <CharacterData :character="selectedCharacter" />
  </div>
</template>

<script setup>
import { characters } from '@/components/CharacterList.vue';
import CharacterData from "@/components/CharacterData.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedCharacter = characters.find(character => character.name === route.params.name);
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card{
    padding: 1%;
}
h1{
    font-size: 135%;
    color: #ffffff;
}
</style>  