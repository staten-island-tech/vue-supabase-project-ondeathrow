<template>
    <div class="displayChar">
        <h2> hello </h2>
    </div>
</template>

<script>
import { characters } from '../components/CharacterList.vue';
import CharacterCard from '@/components/CharacterCard.vue';
import useRoute from 'vue';
const route = useRoute();
console.log("hello ssssssssssssssssssssssssssssss");
</script>

<style scoped>
*{
    background-color: #973232;
}
</style>