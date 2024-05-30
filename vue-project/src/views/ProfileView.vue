<template>
    <h1>Character Index</h1>
    <div class="profile">
        <h2>[username]</h2>
        <h4>[img profile]</h4>
        <p class="signature" maxlength="75"> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaasjwe wednjwed wkejdiog wediwejdwek rnegckj weioetrklhkytmj uyklmtylkhrtog oprgtugr </p>
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
import CharacterCard from "@/components/CharacterCard.vue";
console.log(characters.length);
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
}
.profile{
    background-image: url("https://preview.redd.it/nameless-journey-wallpaper-v0-esnnym3dfu5c1.jpeg?auto=webp&s=0fe86ef198e0e6f0231e2155084c4e4c81bb253d");    background-color: black;
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