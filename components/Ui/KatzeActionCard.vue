<template>
  <div
    ref="target"
    tabindex="0"
    class="cursor-pointer group relative p-12 rounded-xl shadow-lg dark:bg-slate-900 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
    @click="cover"
    @keydown.enter="toggleCover"
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
          'group-hover:h-36 group-focus:h-36 justify-center': !fullCover,
        },
      ]"
    >
      <LockClosedIcon
        v-if="!fullCover"
        class="w-8"
      />
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

const toggleCover = () => {
  if (fullCover.value) {
    uncover()

    return
  }
  cover()
}
const cover = () => {
  fullCover.value = true
  setTimeout(() => {
    isDelayFromCoverAnimationFinished.value = true
  }, 100)
}

const uncover = () => {
  fullCover.value = false
  isDelayFromCoverAnimationFinished.value = false
}
onClickOutside(target, () => {
  uncover()
})
</script>
