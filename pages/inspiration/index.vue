<script setup lang="ts">
const story = await useAsyncStoryblok('inspiration', { version: 'draft' })
</script>

<template>
  <div class="flex flex-col gap-8">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
