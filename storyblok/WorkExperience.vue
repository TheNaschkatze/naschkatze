<template>
  <div v-editable="blok">
    <KatzeActionCard
        :is-unlockable="darkStore.isEnabled"
        :is-unlocked="isUnlocked"
    >
      <template #default>
        <KatzeTypography element="h3">
          {{ blok.job_title }}
        </KatzeTypography>
        <KatzeList class="mt-1" :list-with-icons="listWithIcons" />
        <KatzeTypography element="p">
          {{ blok.description }}
        </KatzeTypography>
      </template>

      <template #cover-content>
        <ExperienceQuizz
          @unlock="isUnlocked = true"
          :quizz="blok.quizz" />
      </template>
    </KatzeActionCard>
  </div>
</template>

<script setup lang="ts">
import KatzeActionCard from '~/components/Ui/KatzeActionCard.vue'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeList from "~/components/Ui/KatzeList.vue";
import {BuildingOffice2Icon, CalendarIcon, MapPinIcon} from "@heroicons/vue/20/solid";

const props = defineProps({ blok: Object })
const darkStore = useDarkModeStore()
const isUnlocked = ref(false)

if (!props.blok) {
  throw new Error('No blok provided')
}

const listWithIcons = [
  {
    icon: BuildingOffice2Icon,
    text: props.blok.employer
  },
  {
    icon: MapPinIcon,
    text: props.blok.location
  },
  {
    icon: CalendarIcon,
    text:props.blok.period
  }
]

</script>
