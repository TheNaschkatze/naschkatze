<template>
  <div class="flex flex-col gap-4">
    <KatzeTypography element="h2">
      Experience
    </KatzeTypography>
    <StoryblokComponent
      v-for="blok in blok.workexperience"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'

defineProps({ blok: Object })

</script>

<style scoped>

</style>
