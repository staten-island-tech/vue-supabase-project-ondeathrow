<template>
    <h1>Characters</h1>
    <div class="container">
        <CharaCard
            v-for="character in characters"
            :key="character.name"
            :Chara="characters"
        />
    </div>
</template>

<script>
import ProfileSomething from '../components/ProfileSomething.vue';
import { characters } from '@/components/CharacterList.vue';
import CharaCard from "@/components/";

</script>

<style scoped>

</style>