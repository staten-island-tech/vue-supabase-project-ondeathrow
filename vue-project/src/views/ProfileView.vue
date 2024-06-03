<template>
    <h1>Character Index</h1>
    <div style="background-image: url(imageIm)" class="profile">
        <h2>[username]</h2>
        <h4>[img profile]</h4>
        <p class="signature" maxlength="75"> insert backgound changing randomly </p>
        <h6> {{linkIm }}</h6>
    </div>
    <div class="container">
        <CharacterCard
            v-for="character in characters"
            :key="character.name"
            :Character="character"
        />
    </div>
</template>

<script setup>
import { characters, lightCones } from '@/components/CharacterList.vue';
import { wallpapers } from '@/components/RandomWall.vue';
import CharacterCard from "@/components/CharacterCard.vue";
console.log(characters.length);

let item = wallpapers[Math.floor(Math.random()*wallpapers.length)];
let linkIm = item.image;
console.log(linkIm);

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
}
.profile{
    position: fixed;
    z-index: 2;
    right: 15px;
    top: 70px;
    width: 25%;
    margin: 1rem;
}
.signature{
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    padding: 1%;
}
.card{
    padding: 1%;
}
h1{
    font-size: 135%;
    color: #ffffff;
}
</style>