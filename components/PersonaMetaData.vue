<template>
  <ul class="flex text-text-color gap-4">
    <li class="flex"><MapPinIcon class="h-7"/><KatzeTypography element="p">| Hamburg, Germany </KatzeTypography></li>
    <li class="flex"><BuildingOffice2Icon class="h-7"/><KatzeTypography element="p">| Kartenliebe, Munich, Germany </KatzeTypography></li>
  </ul>
</template>

<script setup>
import { MapPinIcon } from '@heroicons/vue/20/solid'
import { BuildingOffice2Icon } from '@heroicons/vue/20/solid'
import KatzeTypography from "~/components/Ui/KatzeTypography.vue";

</script>

<style lang="scss" scoped>

</style>
