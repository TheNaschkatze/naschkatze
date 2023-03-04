<template>
  <div
    ref="target"
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg bg-white"
    @click="fullCover = true"
  >
    <slot />
    <!-- Cover -->
    <div
      v-if="isUnlockable"
      :class="[
        {
          'w-full h-full group-hover:none rounded-l-lg': fullCover,
          'group-hover:w-36 justify-center': !fullCover,
        },
        'absolute rounded-r-lg h-full w-24 top-0 right-0 p-4 bg-yellow-500 transition-width duration-300 ease-out flex'
      ]"
    >
      <LockClosedIcon class="w-8" />
      <p
        v-if="!fullCover"
        class="group-hover:block hidden absolute bottom-4"
      >
        Unlock
      </p>
      <slot name="cover-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { LockClosedIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  isUnlockable: boolean
}>()
const target = ref(null)
const fullCover = ref(false)
onClickOutside(target, () => fullCover.value = false)
</script>
