<template>
  <a :href="href" class="group focus:outline-none hover:cursor-pointer text-text-color">
    <component :is="darkStore.isEnabled ? darkSvg : lightSvg" class="w-24 h-24 focus:outline-none group-focus-visible:ring-2 group-focus-visible:ring-primary" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  darkSvg: object |(() => object),
  lightSvg: object | (() => object),
  href: string
}>()
const darkStore = useDarkModeStore()

</script>

<style scoped>

</style>
