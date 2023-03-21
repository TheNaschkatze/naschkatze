<script setup>
import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/vue/20/solid'
import { storeToRefs } from 'pinia'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { personaStore } from '~/stores/personaStore'
import KatzeList from "~/components/Ui/KatzeList.vue";

const store = personaStore()
const { persona } = storeToRefs(store)
const realPersona = computed(() => persona.value?.real)
const listWithIcons = [
  {
    icon: MapPinIcon,
    text: realPersona.value?.location
  },
  {
    icon: BuildingOffice2Icon,
    text: realPersona.value?.workplace
  }
]
</script>

<template>
  <KatzeList class="justify-center lg:justify-start" :list-with-icons="listWithIcons" />
</template>
