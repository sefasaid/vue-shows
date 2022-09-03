<script setup>
// component props
defineProps(["season"]);
</script>

<template>
  <div class="season">
    <img
      :src="
        season.image
          ? season.image.original
          : 'https://via.placeholder.com/300?text=Season ' + season.number
      "
      alt="season image"
    />
    <h1>Season {{ season.number }}</h1>
    <h2>Episodes {{ season.episodeOrder }}</h2>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
h1,
h2 {
  font-size: 100%;
}
</style>
