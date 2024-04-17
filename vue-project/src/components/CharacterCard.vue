<template>
  <div class="card">
    <img class="image-of-char" :src="Character.icon" :alt="Character.name"/>
    <h2 class="char-name">{{ Character.name }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
    Character: Object,
});
</script>

<style scoped>
.image-of-char{
    height: 13%;
}
</style>