<script setup lang="ts">
import { BasePage } from '~/types/storyblok-components'

defineProps<{blok: BasePage}>()
</script>

<template>
  <div v-editable="blok" class="lg:px-4">
    <StoryblokComponent v-for="nestedBlok in blok.body" :key="nestedBlok._uid" :blok="nestedBlok" />
  </div>
</template>
