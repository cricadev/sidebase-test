<template>
  <Carousel :settings="settings" class="my-4 ">
    <Slide v-for="slide in promoSlides" :key="slide">
      <div class="grid items-center justify-center w-full grid-cols-2 grid-rows-3 p-4 transition-all rounded-lg place-items-center carousel__item dark:bg-darkColorSecondary bg-colorSecondary ">
        <nuxt-img class="object-contain w-full h-full col-start-1 col-end-2 row-start-1 row-end-4 " :src="slide.url" />
        <div class="flex flex-col items-center justify-center col-start-2 col-end-3 row-start-1 row-end-4 ">
          <h3 class="text-base font-bold">
            {{ slide.title }}
          </h3>
          <span class="">
            {{ slide.subtitle }}
          </span>
          <button v-if="slide.cta" type="button" class="p-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            Learn more
            <Icon
              name="material-symbols:arrow-forward-ios"
            />
          </button>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>

    ...
  </Carousel>
</template>

<script setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const settings = {
  itemsToShow: 1.5,

  wrapAround: true,
  autoplay: 5000,
  snapAlign: 'center',
  pauseAutoplayOnHover: true
}

const promoSlides = ref([{
  title: '30% off',
  subtitle: 'each monday',
  cta: true,
  url: '/popcorn.png'
},
{
  title: 'Free Soda',
  subtitle: 'For your first purchase',
  cta: true,
  url: '/soda.png'
},
{
  title: '10% off',
  subtitle: 'For your first purchase',
  cta: true,
  url: '/ticket.png'
}

])

</script>

<style  lang="scss">

$background: #151517;
$secondary: #1e1e1e;
$accent: #0059e0;
$tertiary: #7eb0df;
$inactive: #afafaf;
$text: #eee;
.carousel__pagination {
  padding: 4px;
}
.carousel__pagination-button {
  background-color: $tertiary;
  border-radius: 50%;
  transform: scaleY(1.2) scaleX(.7);

  &:hover {
    background-color: $accent;
    transition: 0.2s all ease-in;
  }
}
.carousel__pagination-button:hover::after {
  background-color: $accent;
  transition: 0.2s all ease-in;
}
.carousel__pagination-button::after {
  background-color: $tertiary;
  border-radius: 50%;
  &:hover {
    background-color: $accent;
    transition: 0.2s all ease-in;
  }
}

.carousel__pagination-button--active {
  background-color: $accent;
  transform: scaleY(1.4) scaleX(0.8);

  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  background-color: $accent;
  border-radius: 50%;
}
.carousel__pagination {
  padding: 4px;
}
.carousel__slide {
  transform: scale(0.8);
  transition: 0.2s all ease-in-out;
}

.carousel__track .carousel__slide--active {
  transform: scale(1);
  transition: 0.5s all ease-in-out;
}
</style>
