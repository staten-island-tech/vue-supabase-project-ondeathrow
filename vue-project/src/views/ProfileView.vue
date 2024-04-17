<template>
    <h1>Characters</h1>
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
import { characters } from '@/components/CharacterList.vue';
import CharacterCard from "@/components/CharacterCard.vue";
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
}
.card{
    padding: 2%;
}
</style>