<template>
    <h1>Character Index</h1>
    <div class="container">
        <CharacterCard
            v-for="character in characters"
            :key="character.name"
            :Character="character"
        />
    </div>
</template>

<script setup>
import ProfileSomething from '../components/ProfileSomething.vue';
import { characters, lightCones } from '@/components/CharacterList.vue';
import CharacterCard from "@/components/CharacterCard.vue";

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card{
    padding: 1%;
    filter: greyscale(1);
}
h1{
    font-size: 135%;
}
</style>