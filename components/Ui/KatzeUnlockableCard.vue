<template>
  <div
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg bg-white"
  >
    <slot />
    <!-- Cover -->
    <div
      class="
        absolute rounded-r-lg h-full w-12 top-0 right-0 bg-yellow-500
        group-hover:w-24 transition-width duration-300 ease-out
        flex justify-center
      "
    >
      <LockClosedIcon class="w-8" />
      <p class="group-hover:block hidden absolute bottom-1/4">
        Unlock
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon } from '@heroicons/vue/20/solid'

</script>

<style scoped>

</style>
