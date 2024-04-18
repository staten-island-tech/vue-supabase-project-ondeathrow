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
.char-name{
  font-size: 100%;
  margin: 0% 3% 0% 3%;
  color: white;
}
.card{
  padding: 1%;
  margin: 2%;
  background-color: #10162e;
}
.image-of-char{
  width: 60%;
}
</style>