<template>
  <div v-editable="blok">
    <KatzeActionCard :is-unlockable="darkStore.isEnabled">
      <template #default>
        <KatzeTypography element="h3">
          {{ blok.job_title }}
        </KatzeTypography>
        <KatzeTypography element="p">
          {{ blok.description }}
        </KatzeTypography>
      </template>

      <template #cover-content>
        <ExperienceQuizz :quizz="blok.quizz" />
      </template>
    </KatzeActionCard>
  </div>
</template>

<script setup lang="ts">
import KatzeActionCard from '~/components/Ui/KatzeActionCard.vue'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'

defineProps({ blok: Object })
const darkStore = useDarkModeStore()

</script>
