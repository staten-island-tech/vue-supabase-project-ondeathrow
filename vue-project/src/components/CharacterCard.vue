<template>
  <template v-if="Character.obtained">
    <router-link :to="charPath" class="card" draggable="false">
      <img
        draggable="false"
        class="image-of-char"
        :src="Character.icon"
        :alt="Character.name"
      />
      <h2 draggable="false" class="char-name">{{ Character.name }}</h2>
      <img draggable="false" class="star-rare" :src="Character.rarityicon" />
    </router-link>
  </template>
  <template v-else>
    <div class="card disabled">
      <img
        draggable="false"
        class="image-of-char"
        :src="Character.icon"
        :alt="Character.name"
        style="filter: grayscale(100%);"
      />
      <h2 draggable="false" class="char-name">{{ Character.name }}</h2>
      <img draggable="false" class="star-rare" :src="Character.rarityicon" />
    </div>
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { characters } from './CharacterList.vue';
const props = defineProps({
  Character: Object,
});

const charPath = computed(()=>{
  return `character/${props.Character.name}`;
});
</script>

<style scoped>
.char-name{
  font-size: 100%;
  margin: 0% 3% 0% 3%;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card{
  margin: 1rem;
  font-size: 100%;
  background-color: #10162ead;
  border: 0.2rem solid #a98e61;
  display: inline-block;
  width: calc(14%);
  height: max-content;
  transition: 0.5s;
  hyphens: auto;
  display: block;
}
.card:hover{
  background-color: #18265f5b;
  border: 0.2rem solid #d6be91;
}
.image-of-char{
  width: 60%;
  filter: grayscale(0);
  z-index: 1;
}
.star-rare{
  height: 1rem;
}
</style>