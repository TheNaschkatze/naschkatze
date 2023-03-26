<script setup lang="ts">
import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'

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
  <ul class="flex text-text-color gap-4">
    <li
      v-for="item in listWithIcons"
      :key="item.text"
      class="flex"
    >
      <component :is="item.icon" class="h-7" />
      <KatzeTypography element="p">
        | {{ item.text }}
      </KatzeTypography>
    </li>
  </ul>
</template>
