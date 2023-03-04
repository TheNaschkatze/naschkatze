<template>
  <ul class="flex text-text-color gap-4 justify-center lg:justify-start">
    <li class="flex">
      <MapPinIcon class="h-7" /><KatzeTypography element="p">
        | {{ realPersona.location }}
      </KatzeTypography>
    </li>
    <li class="flex">
      <BuildingOffice2Icon class="h-7" /><KatzeTypography element="p">
        | {{ realPersona.workplace }}
      </KatzeTypography>
    </li>
  </ul>
</template>

<script setup>
import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/vue/20/solid'
import { storeToRefs } from 'pinia'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { personaStore } from '~/stores/personaStore'

const store = personaStore()
const { persona } = storeToRefs(store)
const realPersona = computed(() => persona.value?.real)
</script>

<style lang="scss" scoped>

</style>
