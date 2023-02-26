<template>
  <div
    v-editable="blok"
  >
    <KatzeUnlockableCard>
      <h1>{{ blok.job_title }}</h1>
    </KatzeUnlockableCard>
  </div>
</template>

<script setup lang="ts">
import KatzeUnlockableCard from '~/components/Ui/KatzeUnlockableCard.vue'

defineProps({ blok: Object })

</script>

<style scoped>

</style>
