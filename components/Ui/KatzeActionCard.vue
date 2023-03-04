<template>
  <div
    ref="target"
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg bg-white"
    @click="fullCover = true"
  >
    <slot />
    <!-- Cover -->
    <div
      :class="[
        {
          'w-full h-full group-hover:none rounded-l-lg': fullCover,
          'group-hover:w-24': !fullCover,
        },
        'absolute rounded-r-lg h-full w-12 top-0 right-0 bg-yellow-500  transition-width duration-300 ease-out flex justify-center'
      ]

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
import { onClickOutside } from '@vueuse/core'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
const target = ref(null)
const fullCover = ref(false)
onClickOutside(target, () => fullCover.value = false)
</script>
