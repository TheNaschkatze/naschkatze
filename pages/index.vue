<template>
  <div>
    <PersonaComponent />
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<style scoped>

</style>
