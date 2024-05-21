<template>
    <img class="fullchar" :src="Character.fullBody" :alt="Character.name"/>
    <h2 class="char-name">{{ Character.name }}</h2>
</template>

<script setup>
const props = defineProps({
  Character: Object,
});
</script>
 
<style scoped>
</style>