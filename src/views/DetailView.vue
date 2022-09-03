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
    <div class="show-card-header">
      <div class="show-card-image">
        <img :src="selectedShow.image.medium" alt="show image" />
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
.show-card {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.25) solid;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
