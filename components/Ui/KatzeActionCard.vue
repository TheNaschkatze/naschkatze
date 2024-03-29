<script setup lang="ts">
import { onClickOutside, useMediaQuery } from '@vueuse/core'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import KatzeButton from '~/components/Ui/KatzeButton.vue'

defineProps<{
  isUnlockable: boolean
  isUnlocked: boolean
}>()

const target = ref(null)
const fullCover = ref(false)
const isDelayFromCoverAnimationFinished = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const noToggleTags = ['BUTTON', 'INPUT']

const toggleCover = (event?: Event) => {
  if (fullCover.value) {
    uncover(event)

    return
  }
  cover(event)
}
const cover = (event?: Event) => {
  if (event?.target instanceof HTMLElement && noToggleTags.includes(event.target.tagName)) {
    return
  }
  fullCover.value = true

  // Delay entering of slot
  setTimeout(() => {
    isDelayFromCoverAnimationFinished.value = true
  }, isLargeScreen.value ? 100 : 0)
}

const uncover = (event?: Event) => {
  if (event?.target instanceof HTMLElement && noToggleTags.includes(event.target.tagName)) {
    return
  }
  fullCover.value = false
  isDelayFromCoverAnimationFinished.value = false
}

onClickOutside(target, () => {
  uncover()
})
</script>

<template>
  <div
    ref="target"
    tabindex="0"
    class="cursor-pointer group relative p-4 lg:p-12 rounded-xl shadow-lg dark:bg-slate-900 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
    @keydown.enter="toggleCover"
    @click="cover"
  >
    <div
      :class="isUnlockable && !isUnlocked ? 'dark:mb-24' : ''"
      @click="cover"
    >
      <slot name="default" />
    </div>
    <!-- Overlay -->
    <div
      v-if="fullCover && !isUnlocked"
      class="absolute inset-0 bg-black opacity-50"
    />
    <!-- Cover -->
    <transition
      leave-to-class="translate-y-[150%] opacity-0"
      leave-active-class="transition duration-300"
    >
      <div
        v-if="isUnlockable && !isUnlocked"
        :class="[
          'absolute rounded-lg w-full h-24 bottom-0 left-0 bg-yellow-600 transition-height duration-300 ease-out',
          {
            'h-min lg:h-full group-hover:none p-4 lg:p-12 ': fullCover,
            'flex group-hover:h-36 group-focus:h-36 justify-center p-4': !fullCover,
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
        <KatzeButton
          v-if="fullCover"
          data-ref="closeButton"
          variant="ghost"
          class="absolute top-0 right-0 lg:mr-12 m-4 "
          @click="uncover"
        >
          [ X ]
        </KatzeButton>
        <section v-if="isDelayFromCoverAnimationFinished" class="mx-auto my-auto whitespace-pre-wrap">
          <slot name="cover-content" />
        </section>
      </div>
    </transition>
  </div>
</template>
