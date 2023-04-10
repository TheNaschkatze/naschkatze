<script setup lang="ts">
import { BookOpenIcon } from '@heroicons/vue/20/solid'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeCard from '~/components/Ui/KatzeCard.vue'

const story = await useAsyncStoryblok('inspiration', { version: 'draft' })
</script>

<template>
  <div class="flex flex-col gap-8">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
  <KatzeTypography element="h1" class="mb-8">
    Inspiration
  </KatzeTypography>
  <section class="grid grid-cols-3 grid-rows-2 gap-4">
    <KatzeCard>
      <template #eyebrow>
        <BookOpenIcon class="w-5 mb-0.5 inline-block mr-4" />
        William Ernest Henley
      </template>
      <template #title>
        Invictus
      </template>
      <template #content>
        This Awesome Poem is written by William Ernest Henley, and whenever I feel I need endurence I like to revisit it.
      </template>
    </KatzeCard>

    <KatzeCard
      layout="horizontal"
    >
      <template #eyebrow>
        <BookOpenIcon class="w-5 mb-0.5 inline-block mr-4" />
        William Ernest Henley
      </template>
      <template #title>
        Invictus
      </template>
      <template #content>
        This Awesome Poem is written by William Ernest Henley, and whenever I feel I need endurence I like to revisit it.
      </template>
    </KatzeCard>
  </section>
  <div class="grid grid-cols-3 grid-rows-2 gap-4 h-96">
    <div class="bg-blue-500 p-4 row-span-2">
      1
    </div>
    <div class="bg-blue-500 p-4">
      2
    </div>
    <div class="bg-blue-500 p-4 col-span-2">
      3
    </div>
    <div class="bg-blue-500 p-4">
      4
    </div>
    <div class="bg-blue-500 p-4">
      5
    </div>
    <div class="bg-blue-500 p-4 ">
      6
    </div>
  </div>
</template>
