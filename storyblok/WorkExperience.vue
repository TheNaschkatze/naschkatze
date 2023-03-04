<template>
  <div
    v-editable="blok"
  >
    <KatzeUnlockableCard
      :is-unlockable="darkStore.isEnabled"
    >
      <h1>{{ blok.job_title }}</h1>
    </KatzeUnlockableCard>
  </div>
</template>

<script setup lang="ts">
import KatzeUnlockableCard from '~/components/Ui/KatzeActionCard.vue'

defineProps({ blok: Object })
const darkStore = useDarkModeStore()


</script>

<style scoped>

</style>
