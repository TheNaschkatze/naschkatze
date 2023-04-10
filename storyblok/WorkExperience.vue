<script setup lang="ts">
import { BuildingOffice2Icon, CalendarIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import KatzeActionCard from '~/components/Ui/KatzeActionCard.vue'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeList from '~/components/Ui/KatzeList.vue'
import { WorkExperience } from '~/types/storyblok-components'

const props = defineProps<{
  blok: WorkExperience
}>()
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
    text: props.blok.period
  }
]

</script>

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
        <KatzeList
          class="mt-4 flex-wrap justify-start"
          :list-with-icons="listWithIcons"
        />
        <KatzeTypography
          element="p"
          class="mt-4 whitespace-pre-wrap"
        >
          {{ blok.description }}
        </KatzeTypography>
        <transition
          enter-to-class="opacity-100 bg-yellow-500"
          enter-active-class="transition ease-in-out duration-500"
        >
          <KatzeTypography
            v-if="isUnlocked"
            element="p"
          >
            {{ blok.treasure }}
          </KatzeTypography>
        </transition>
      </template>

      <template #cover-content>
        <ExperienceQuizz
          :quizz="blok.quizz"
          @unlock="isUnlocked = true"
        />
      </template>
    </KatzeActionCard>
  </div>
</template>
