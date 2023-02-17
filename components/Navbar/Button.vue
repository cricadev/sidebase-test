<template>
  <li class="px-2 py-2 rounded-md dark:bg-darkColorSecondary bg-colorSecondary">
    <a href="#" class="flex items-center justify-between p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <div class="">
        <Icon
          :name="icon"
          size="24"
        />
        <span
          class="ml-3"
        > {{ title }} </span>

      </div>
      <Icon
        name="material-symbols:arrow-forward-ios"
      />
    </a>
  </li>
</template>
<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true
  }
})
</script>
