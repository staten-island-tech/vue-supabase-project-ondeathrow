<template>
  <div class="card">
    <img class="image-of-char" :src="Character.icon" :alt="Character.name"/>
    <h2 class="char-name">{{ Character.name }}</h2>
    <img class="star-rare" :src="Character.rarityicon"/>
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
  color: #ffffff;
}
.card{
  margin: 1%;
  background-color: #10162e;
  border: 0.2rem solid #a98e61;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.image-of-char{
  width: 60%;
}
.image-of-char {
  color: gray;
}
.star-rare{
  height: 1rem;
}
</style>