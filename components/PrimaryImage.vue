<template>
  <h2 class="sr-only">
    {{ imageText }}
  </h2>
  <img
    :src="imageSrc"
    :alt="'todo'"
    :class="[
      'w-96 h-96 rounded-lg lg:col-span-2 lg:row-span-2',
      phase === 'out' ? 'rotate-out' : '',
      phase === 'in' ? 'rotate-in' : ''
    ]"
  >
</template>

<script setup lang="ts">
const darkModeStore = useDarkModeStore()
const imageDark = 'https://preview.redd.it/dxqt13ka0hf71.jpg?auto=webp&s=8c6ab9aafefeb69121b22020bcb235f49586808a'
const imageLight = 'https://profile-images.xing.com/images/e2cd073872084b805a5415dc61967886-1/alonso-valenzuela.1024x1024.jpg'
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
