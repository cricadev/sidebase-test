<template>
  <div class="">
    <pre style="overflow: auto;">{{ themeVars }}</pre>
  </div>
</template>

<script setup>
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()

</script>
