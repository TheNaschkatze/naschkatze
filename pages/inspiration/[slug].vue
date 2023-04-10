<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { InspirationEntry } from '~/types/storyblok-components'

const route = useRoute()
const story = await useAsyncStoryblok(`inspiration/${route.params.slug}`, { version: 'draft' })
const blok = computed<InspirationEntry | undefined>(() => story.value?.content?.body?.[0])
</script>

<template>
  <div class="relative h-[95vh] -mt-2 md:-mt-20 -mx-2 md:-mx-12">
    <img
      :src="blok.image?.filename"
      alt=""
      class="w-full h-full object-cover opacity-60"
    >
    <div class="absolute bottom-0 left-0 mb-4 ml-4 px-2 lg:px-12">
      <KatzeTypography element="p" class="text-white">
        <UserCircleIcon class="w-5 mb-1 mr-2 inline-block" />{{ blok.author }}
      </KatzeTypography>
      <KatzeTypography element="h1">
        {{ blok.title }}
      </KatzeTypography>
    </div>
  </div>
  <KatzeTypography element="p" class="whitespace-pre-wrap mt-8 ml-4">
    {{ blok.content }}
  </KatzeTypography>
</template>
