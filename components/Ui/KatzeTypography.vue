<template>
  <component
    :is="true ? 'h1' : 'span'"
    :class="{
      h1: 'text-transparent text-6xl md:text-8xl font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary',
      h2: 'text-text-color text-4xl md:text-6xl font-bold',
      p: 'text-text-color text-xl font-light mb-4'
    }[element]"
  >
    <slot/>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  element: "h1"
}>()

</script>

<style scoped>

</style>
