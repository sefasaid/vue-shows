<script setup>
// component props
defineProps(["cast"]);
</script>

<template>
  <div class="cast">
    <img :src="cast.person.image.medium" alt="cast image" />
    <h1>{{ cast.person.name }}</h1>
    <h2>{{ cast.character.name }}</h2>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
h1,
h2 {
  font-size: 100%;
}
</style>
