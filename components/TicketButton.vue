<template>
  <div class="flex justify-center p-4">
    <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class="fixed p-3 mb-2 mr-2 text-sm font-medium text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 top-12 right-10 dark:bg-darkColorSecondary bg-colorSecondary">
      <Icon
        name="mdi:ticket-confirmation"
        size="24px"
        class="text-text dark:text-darkText"
      />
    </button>
  </div>

  <div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative rounded-lg shadow dark:bg-darkColorPrimary bg-colorPrimary">
        <!-- Modal header -->
        <div class="flex items-center justify-start ">
          <button id="closeButton" data-modal-hide="modal" type="button" class=" text-text dark:text-darkText dark:bg-darkColorSecondary bg-colorSecondary hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <Icon
              name="material-symbols:arrow-back"
              size="24px"
            />

            <span
              class="sr-only"
            >
              Close menu</span>
          </button>
          <Icon
            name="mdi:ticket-confirmation"
            size="20px"
            class="ml-4"
          />
          <h3 class="ml-4 text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
            Your tickets
          </h3>
        </div>

        <!-- Modal body -->
        <div class="grid grid-cols-6 px-2 py-8 ">
          <p class="col-start-1 col-end-7 my-2 text-base font-semibold leading-relaxed text-text dark:text-darkText">
            Current - Wednesday, May 4 - 15:00pm
          </p>
          <img src="" alt="" class="w-24 h-40 col-start-1 col-end-3 border-2 border-green-400">
          <ul class="col-start-3 col-end-7 space-y-2">
            <h3 class="text-sm font-bold">
              Jumanji: Welcome to the jungle
            </h3>

            <div class="grid grid-cols-2 gap-2 my-2">
              <li class="flex items-center justify-start gap-2">
                <Icon
                  name="material-symbols:location-on-outline"
                  size="24px"
                  class="text-text dark:text-darkText"
                />
                <span class="font-semibold text-xss">Regal e-walk</span>
              </li>
              <li class="flex items-center justify-start gap-2">
                <Icon
                  name="mdi:glasses"
                  size="24px"
                  class="text-text dark:text-darkText"
                />
                <span class="text-xs font-semibold">4DX</span>
              </li>
              <li class="flex items-center justify-start gap-2">
                <Icon
                  name="ic:baseline-person-outline"
                  size="24px"
                  class="text-text dark:text-darkText"
                />
                <span class="text-xs font-semibold"> 1</span>
              </li>
              <li class="flex items-center justify-start gap-2">
                <Icon
                  name="material-symbols:event-seat-outline"
                  size="24px"
                  class="text-text dark:text-darkText"
                />
                <span class="text-xs font-semibold">G6</span>
              </li>
            </div>
            <li>
              <button type="button" class="flex flex-col justify-start w-full p-0 text-sm font-medium bg-transparent rounded-lg text-text dark:text-darkText focus:outline-none focus:ring-4 focus:ring-gray-300">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-start justify-start gap-2 text-start">
                    <span class="flex items-center gap-2">
                      <Icon name="mdi:food-outline" size="24px" class="text-text dark:text-darkText" />
                    </span>
                    <div class="flex flex-col">
                      <span class="text-xs">Mega Combo</span>
                      <span class="text-xss">2 Large Pop Corn + Soda + Hot Dog</span>
                    </div>
                  </div>

                  <Icon
                    name="material-symbols:arrow-forward-ios"
                  />
                </div>
              </button>
            </li>
            <li>
              <button type="button" class="flex flex-col justify-start w-full p-0 text-sm font-medium bg-transparent rounded-lg text-text dark:text-darkText focus:outline-none focus:ring-4 focus:ring-gray-300">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-start justify-start gap-2 text-start">
                    <span class="flex items-center gap-2">
                      <Icon name="mdi:tag-multiple-outline" size="24px" class="text-text dark:text-darkText" />
                    </span>
                    <div class="flex flex-col">
                      <span class="text-xs">Free soda and 10% off</span>
                      <span class="text-xss">For your first purchase</span>
                    </div>
                  </div>

                  <Icon
                    name="material-symbols:arrow-forward-ios"
                  />
                </div>
              </button>
            </li>
          </ul>
          <div class="flex items-center justify-center col-start-1 col-end-7 pb-6 border-b border-text dark:border-darkText ">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 pr-2.5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
              See tickets
              <Icon
                name="material-symbols:arrow-forward-ios"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions()
  initCarousels()
  initCollapses()
  initDials()
  initDismisses()
  initDrawers()
  initDropdowns()
  initModals()
  initPopovers()
  initTabs()
  initTooltips()
})
// initialize components based on data attribute selectors
</script>
