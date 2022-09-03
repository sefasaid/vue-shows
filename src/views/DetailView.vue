<script setup>
// imports
import { useShowsStore } from "../stores/shows";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import CastComponent from "@/components/CastComponent.vue";
import SeasonComponent from "@/components/SeasonComponent.vue";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// component variables
const route = useRoute();
const id = route.params.id;
const { getShowDetail } = useShowsStore();
getShowDetail(id);
const { loading, selectedShow } = storeToRefs(useShowsStore());

const modules = [Navigation, Pagination];

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
</script>

<template>
  <p v-if="loading">Loading data...</p>
  <div class="show-card" v-if="selectedShow && !loading">
    <div class="show-card-navigation">
      <router-link class="show-card-navigation-back" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path
            d="m10 16-6-6 6-6 1.062 1.062L6.875 9.25H16v1.5H6.875l4.187 4.188Z"
          />
        </svg>
        Home
      </router-link>
    </div>
    <div class="show-card-header">
      <div class="show-card-image">
        <img
          :src="
            selectedShow.image
              ? selectedShow.image.medium
              : 'https://via.placeholder.com/300?text=' + selectedShow.name
          "
          alt="show image"
        />
      </div>
      <div class="show-card-info">
        <h1>{{ selectedShow.name }}</h1>
        <div v-html="selectedShow.summary"></div>
      </div>
    </div>
    <div class="show-card-cast">
      <h1>Cast:</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6"
        :breakpoints="breakpoints"
        navigation
        :pagination="{
          type: 'progressbar',
        }"
        :scrollbar="{ draggable: true }"
      >
        <!-- slides -->
        <swiper-slide
          v-for="cast in selectedShow._embedded.cast"
          :key="cast.id"
        >
          <CastComponent :cast="cast" />
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
    </div>
    <div class="show-card-seasons">
      <h1>Seasons:</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6"
        :breakpoints="breakpoints"
        navigation
        :pagination="{
          type: 'progressbar',
        }"
        :scrollbar="{ draggable: true }"
      >
        <!-- slides -->
        <swiper-slide
          v-for="season in selectedShow._embedded.seasons"
          :key="season.id"
        >
          <SeasonComponent :season="season" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.show-card-navigation svg {
  fill: white;
}
.show-card-navigation {
  margin: 0 0 10px 0;
  border-bottom: 1px solid white;
  display: flex;
}
.show-card-navigation-back {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 0 10px 0;
}

.show-card {
  margin: 10px;
  padding: 10px;
  flex-direction: column;
}
.show-card-header {
  display: flex;
  flex-direction: column;
}
.show-card-info {
  padding: 10px;
}

.show-card-cast {
  padding: 10px;
  margin-top: 10px;
}
@media (min-width: 1024px) {
  .show-card-header {
    flex-direction: row;
  }
}
</style>
