<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { WorkExperienceList } from '~/types/storyblok-components'

defineProps<{blok: WorkExperienceList}>()

</script>
<template>
  <div class="flex flex-col gap-4">
    <KatzeTypography element="h2">
      Experience
    </KatzeTypography>
    <StoryblokComponent
      v-for="nestedBlok in blok.workexperience"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>
