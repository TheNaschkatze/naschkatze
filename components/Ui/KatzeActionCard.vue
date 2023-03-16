<template>
  <div
    ref="target"
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg dark:bg-slate-900 bg-slate-100"
    @click="unlock"
  >
    <div class="dark:mb-36">
      <slot name="default" />
    </div>
    <!-- Cover -->
    <div
      v-if="isUnlockable"
      :class="[
         'absolute rounded-t-lg w-full h-24 bottom-0 left-0 p-4 bg-yellow-500 transition-width duration-300 ease-out flex',
        {
          'h-full group-hover:none': fullCover,
          'group-hover:h-36 justify-center': !fullCover,
        },
      ]"
    >
      <LockClosedIcon class="w-8" />
      <p
        v-if="!fullCover"
        class="group-hover:block hidden absolute bottom-4 transition duration-300 ease-out"
      >
        Unlock
      </p>
      <section v-if="isDelayFromCoverAnimationFinished" class="w-full">
        <slot name="cover-content" />
      </section>
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
const isDelayFromCoverAnimationFinished = ref(false)

const unlock = () => {
  fullCover.value = true
  setTimeout(() => {
    isDelayFromCoverAnimationFinished.value = true
  }, 100)
}
onClickOutside(target, () => {
  fullCover.value = false
  isDelayFromCoverAnimationFinished.value = false
})
</script>
