<script setup>
// imports
import GenreListComponent from "@/components/GenreListComponent.vue";
import ShowComponent from "@/components/ShowComponent.vue";
import { storeToRefs } from "pinia";
import { useShowsStore } from "../stores/shows";

// store variables
const { loading, genres, searchResults, searchText } = storeToRefs(
  useShowsStore()
);
</script>

<template>
  <main>
    <p v-if="loading">Loading data...</p>
    <div v-if="!loading && genres && searchText === ''">
      <div v-for="genre in genres" :key="genre">
        <GenreListComponent :genre="genre" />
      </div>
    </div>
    <div v-if="!loading && searchText !== ''">
      <h1>Search Result For: {{ searchText }}</h1>
      <div class="search-result">
        <ShowComponent
          v-for="_show in searchResults"
          :key="_show.id"
          :image="
            _show.show.image
              ? _show.show.image.medium
              : 'https://via.placeholder.com/300?text=' + _show.show.name
          "
          :id="_show.show.id"
          :name="_show.show.name"
          :rating="_show.show.rating.average"
        />
      </div>
    </div>
  </main>
</template>
<style scoped>
.search-result {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
