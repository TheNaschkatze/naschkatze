<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'

defineProps<{
    layout: 'horizontal' | 'vertical' | undefined,
    imgSrc: string | undefined
    linkTo: string,
}>()

</script>
<template>
  <nuxt-link
    :to="linkTo?.url"
    :target="linkTo?.target"
    :class="[
      'flex flex-col gap-2 tab-0 rounded-lg p-6 border-gray-400 border-2 cursor-pointer hover:border-primary hover:bg-primary-hover transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-primary',
      {
        'horizontal': 'col-span-2',
      }[layout]
    ]"
  >
    <KatzeTypography element="p">
      <slot name="eyebrow" />
    </KatzeTypography>
    <img
      v-if="imgSrc && layout === 'horizontal'"
      class="rounded w-full object-cover md:hidden block"
      :src="imgSrc"
      alt="Placeholder"
    >
    <div class="flex gap-4">
      <div>
        <KatzeTypography element="h3" class="mb-2">
          <slot name="title" />
        </KatzeTypography>
        <katze-typography element="p">
          <slot name="description" />
        </katze-typography>
      </div>
      <img
        v-if="imgSrc && layout === 'horizontal'"
        class="rounded w-1/2 object-cover md:block hidden"
        :src="imgSrc"
        alt="Placeholder"
      >
    </div>
  </nuxt-link>
</template>
