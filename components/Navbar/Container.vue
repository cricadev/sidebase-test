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

const showDrawer = ref(false)

const buttonsFirst = ref([
  {
    icon: 'material-symbols:favorite-outline',
    title: 'Favorites'
  },
  {
    icon: 'ic:outline-message',
    title: 'Notifications'
  },
  {
    icon: 'ps:sale-tag',
    title: 'Loyalty card and points'
  },
  {
    icon: 'ic:outline-settings',
    title: 'Settings'
  }
])
const buttonsSecond = ref([
  {
    icon: 'ic:baseline-person-outline',
    title: 'Profile'
  },

  {
    icon: 'ic:baseline-logout',
    title: 'Logout'
  }
])
</script>
<template>
  <!-- drawer init and toggle -->
  <div class="flex items-center gap-2 mt-12 ml-8">
    <button
      class="relative text-text dark:text-darkText  bg-colorSecondary hover:bg-darkColorPrimary focus:ring-4 focus:ring-slate-900 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 dark:bg-darkColorSecondary dark:hover:bg-darkColorPrimary focus:outline-none dark:focus:ring-slate-900"
      type="button"
      data-drawer-target="drawer-disable-body-scrolling"
      data-drawer-show="drawer-disable-body-scrolling"
      data-drawer-body-scrolling="false"
      aria-controls="drawer-disable-body-scrolling"
    >
      <Icon name="material-symbols:menu" class="w-6 h-6 " />
      <span class="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
    </button>

    <p class="text-center">
      👋 Hey, <br> <strong>Louis!</strong>
    </p>
  </div>

  <!-- drawer component -->
  <div id="drawer-disable-body-scrolling" class="fixed top-0 left-0 z-40 h-screen p-4 px-4 overflow-y-auto transition-transform -translate-x-full bg-colorPrimary w-80 dark:bg-darkColorPrimary" tabindex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
    <div class="flex items-center gap-4">
      <button type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" class="text-text dark:text-darkText bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <Icon
          name="material-symbols:close"
          size="35px"
        />
        <span
          class="sr-only"
        >
          Close menu</span>
      </button>
      <img src="" alt="" class="w-16 h-16 border-2 border-green-500 rounded-md">
      <h5 id="drawer-disable-body-scrolling-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        👋 Hey,
        <br>
        <strong>Louis!</strong>
      </h5>
    </div>

    <div class="py-4 mt-12 overflow-y-auto ">
      <ul class="space-y-4">
        <NavbarButton v-for="button in buttonsFirst" :key="button" :title="button.title" :icon="button.icon" />
      </ul>
    </div>
    <div class="w-[90%] my-5 h-px mx-auto dark:bg-colorPrimary bg-darkColorPrimary" />
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-4">
        <NavbarButton v-for="button in buttonsSecond" :key="button" :title="button.title" :icon="button.icon" />
      </ul>
    </div>
  </div>
  <TicketButton />
</template>
