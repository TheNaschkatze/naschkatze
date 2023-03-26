<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup lang="ts">
import Page from "~/storyblok/Page.vue";

defineProps<{blok: Page}>()
</script>
