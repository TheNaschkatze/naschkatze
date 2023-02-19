<template>
  <h2 class="sr-only">
    {{ darkModeStore.isEnabled  ? 'Naschkatze\'s Photo' : 'Alonso\'s Photo' }}
  </h2>
  <img
    :src="imageSrc"
    :alt="'todo'"
    :class="[{
      out: 'rotate-out',
      in: 'rotate-in',
    }[phase],
    'w-96 h-96 rounded-lg lg:col-span-2 lg:row-span-2'
    ]"
  >
</template>

<script setup lang="ts">
import javier from '~/public/javier.jpg'
import naschkatze from '~/public/naschkatze.jpg'

const darkModeStore = useDarkModeStore()
const imageLight = javier
const imageDark = naschkatze
const imageSrc = ref(darkModeStore.isEnabled ? imageDark : imageLight)
const phase = ref('')
const isAnimating = ref(false)

watch(() => darkModeStore.isEnabled, () => {
  if (isAnimating.value) { return }
  isAnimating.value = true
  phase.value = 'out'
  // wait one second
  setTimeout(() => {
    imageSrc.value = imageSrc.value === imageDark ? imageLight : imageDark
    phase.value = 'in'
    isAnimating.value = false
  }, 250)
}
)
</script>

<style scoped>
.rotate-out {
  animation: rotate-out .25s;
}

.rotate-in {
  animation: rotate-in .25s;
}

@keyframes rotate-out {
  0% {
    transform: rotateY(0deg);

  }
  100% {
    transform: rotateY(90deg);
  }
}

@keyframes rotate-in {
  0% {
    transform: rotateY(90deg);

  }
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes rotate-animation {
  from {transform: rotateY(45deg);}
  to {transform: rotateY(225deg);}
}
</style>
