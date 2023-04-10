<script setup lang="ts">
import { ChatBubbleBottomCenterIcon, MicrophoneIcon, VideoCameraIcon, BookOpenIcon } from '@heroicons/vue/24/solid'
import { InspirationListItem } from '~/types/storyblok-components'
import KatzeCard from '~/components/Ui/KatzeCard.vue'

const props = defineProps<{
  blok: InspirationListItem
}>()

if (!props.blok) {
  throw new Error('No blok provided')
}

const icon = computed(() => {
  switch (props.blok.icon) {
    // case for video, speech, literature, podcast
    case 'video':
      return VideoCameraIcon
    case 'speech':
      return ChatBubbleBottomCenterIcon
    case 'literature':
      return BookOpenIcon
    case 'podcast':
      return MicrophoneIcon
    default:
      return null
  }
})

const transformLink = computed(() => {
  if (props.blok.linkTo.linktype === 'story') {
    return {
      url: props.blok.linkTo.cached_url
    }
  }
  return props.blok.linkTo
})

</script>

<template>
  <KatzeCard
    :link-to="transformLink"
    :layout="blok.layout"
    :img-src="blok.image?.filename"
  >
    <template #eyebrow>
      <component :is="icon" v-if="icon" class="w-6 mb-1 mr-2 inline" />
      {{ blok.eyebrow }}
    </template>
    <template #title>
      {{ blok.title }}
    </template>
    <template #description>
      {{ blok.description }}
    </template>
  </KatzeCard>
</template>
