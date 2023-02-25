<template>
  <a :href="href" class="hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-text-color">
     <component class="w-24 h-24" :is="darkStore.isEnabled ? darkSvg : lightSvg"/>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  darkSvg: string,
  lightSvg: string,
  href: string
}>()
const darkStore = useDarkModeStore()


</script>

<style scoped>


</style>
