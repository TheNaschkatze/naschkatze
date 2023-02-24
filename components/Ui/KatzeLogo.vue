<template>
  <a :href="url" class="hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
     <component :is="darkStore.isEnabled ? darkSvg : lightSvg"/>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  darkSvg: string,
  lightSvg: string,
  url: string
}>()
const darkStore = useDarkModeStore()


</script>

<style scoped>


</style>
