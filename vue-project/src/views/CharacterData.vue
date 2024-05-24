<template>
    <div class="displayChar">
        <h2> hello </h2>
    </div>
</template>

<script>
import { characters, lightCones } from '../components/CharacterList.vue';
import CharacterCard from '@/components/CharacterCard.vue';
import useRoute from 'vue';
const route = useRoute();
//include params somehow
console.log("hi");
</script>

<style scoped>
*{
    background-color: #973232;
}
</style>