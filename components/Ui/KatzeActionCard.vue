<template>
  <div
    ref="target"
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg dark:bg-slate-900 bg-slate-100"
    @click="unlock"
  >
    <div class="dark:mr-36">
      <slot name="default" />
    </div>
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
        class="group-hover:block hidden absolute bottom-1/3"
      >
        Unlock
      </p>
      <section v-if="isCoverAnimationFinished" class="w-full">
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
const isCoverAnimationFinished = ref(false)

const unlock = () => {
  fullCover.value = true
  // wait  300 ms before setting isCoverAnimationFinished to true
  setTimeout(() => {
    isCoverAnimationFinished.value = true
  }, 300)
}
onClickOutside(target, () => {
  fullCover.value = false
  isCoverAnimationFinished.value = false
})
</script>
