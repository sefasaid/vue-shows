<script setup>
// imports
import ShowComponent from "@/components/ShowComponent.vue";
import { toRefs } from "vue";
import { useShowsStore } from "../stores/shows";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// store variables
const { getShowsByGenre } = useShowsStore();
// swiper variables
const modules = [Navigation, Pagination];

const breakpoints = {
  320: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};
// component variables
const props = defineProps(["genre"]);

const { genre } = toRefs(props);
const shows = getShowsByGenre(props.genre);
</script>

<template>
  <h1 class="genre-name">
    {{ genre }}
  </h1>
  <div class="swiper-container">
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
      <swiper-slide v-for="show in shows" :key="show.id">
        <ShowComponent
          :image="show.image.medium"
          :id="show.id"
          :name="show.name"
          :rating="show.rating.average"
        />
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>
<style scoped>
.genre-name {
  margin: 20px;
}
.swiper-slide {
  -webkit-transition: 250ms all;
  transition: 250ms all;
  cursor: pointer;
}
.swiper-slide:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  z-index: 1;
}
.swiper-slide:first-child:hover {
  margin: 0 40px;
}
.swiper-slide:last-child:hover {
  margin: 0 -40px;
}

.swiper-container {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
