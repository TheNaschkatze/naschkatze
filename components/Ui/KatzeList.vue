<script setup lang="ts">
import KatzeTypography from "~/components/Ui/KatzeTypography.vue";
import {FunctionalComponent, HTMLAttributes, VNodeProps} from "vue";

defineProps<{
  listWithIcons: [
    {
      icon: FunctionalComponent<HTMLAttributes & VNodeProps>,
      text: string
    }
  ]
}>()
</script>

<template>
  <ul class="flex text-text-color gap-4 justify-center lg:justify-start">
    <li class="flex" v-for="item in listWithIcons">
      <component :is="item.icon" class="h-7" />
      <KatzeTypography element="p">
      | {{ item.text }}
    </KatzeTypography>
    </li>
  </ul>
</template>
