<script setup>
// imports
import { RouterLink } from "vue-router";
// component props
defineProps(["image", "name", "rating", "id"]);
</script>

<template>
  <RouterLink :to="{ name: 'detail', params: { id: id } }">
    <div class="show">
      <img :src="image" alt="show image" />
      <div class="content">
        <h1 class="name">{{ name }}</h1>
        <p class="rating">{{ rating ?? 0 }} / 10</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 12px;
}
.show {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
  transition: 0.5s ease all;
}
.content {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 5px;
}
a {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
@media (min-width: 1024px) {
  .show {
    width: 100%;
    height: 500px;
  }
  h1 {
    font-size: 25px;
  }
  .content {
    padding: 20px;
    padding-bottom: 30px;
  }
}
</style>
