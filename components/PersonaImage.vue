<template>
  <img
    :src="imageSrc"
    :alt="darkModeStore.isEnabled ? 'Naschkatze\'s Photo' : 'Alonso\'s Photo'"
    :class="[
      {
        out: 'rotate-out',
        in: 'rotate-in',
      }[phase],
      'rounded-lg'
    ]"
  >
</template>

<script setup lang="ts">
import javier from 'assets/images/javier.jpg'
import naschkatze from '~/assets/images/morgana.webp'

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
})
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
