<template>
  <a :href="href" class="group focus:outline-none hover:cursor-pointer text-text-color">
     <component class="w-24 h-24 focus:outline-none group-focus-visible:ring-2 group-focus-visible:ring-primary" :is="darkStore.isEnabled ? darkSvg : lightSvg"/>
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
