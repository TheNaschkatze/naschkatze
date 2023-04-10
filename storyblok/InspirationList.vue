<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { InspirationList } from '~/types/storyblok-components'

defineProps<{blok: InspirationList}>()

</script>
<template>
  <KatzeTypography element="h1" class="mb-8">
    Inspiration
  </KatzeTypography>
  <section class="grid grid-cols-3 grid-rows-2 gap-4">
    <StoryblokComponent
      v-for="nestedBlok in blok.inspirationList"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </section>
</template>
