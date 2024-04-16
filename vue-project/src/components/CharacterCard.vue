<template>
  <div class="card">
      <h2>{{ Chara.name }}</h2>
      <img :src="Chara.icon" :alt="Chara.name"/>
  </div>
</template>

<script>
  const props = defineProps({
      Chara: Object,
  })
</script>

<style scoped>

</style>