<template>
  <div>
    <StoryblokComponent
      v-for="blok in blok.workexperience"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object })

</script>

<style scoped>

</style>
