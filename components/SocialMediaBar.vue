<template>
  <ul class="flex justify-between py-2">
    <li>
      <KatzeLogo :dark-svg="githubMarkWhite" :light-svg="githubMark" :href="'https://github.com/' + realPersona.github" />
    </li>
    <li>
      <KatzeLogo :dark-svg="twitterLogoWhite" :light-svg="twitterLogo" :href="realPersona.twitter" />
    </li>
    <li>
      <KatzeLogo :dark-svg="EnvelopeIcon" :light-svg="EnvelopeIcon" :href="'mailTo:' + realPersona.email" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/20/solid'
import { storeToRefs } from 'pinia'
import githubMark from '~/assets/icons/github/github-mark.svg'
import githubMarkWhite from '~/assets/icons/github/github-mark-white.svg'
import KatzeLogo from '~/components/Ui/KatzeLogo.vue'
import twitterLogo from '~/assets/icons/twitter/twitter-logo-black.svg'
import twitterLogoWhite from '~/assets/icons/twitter/twitter-logo-white.svg'
import { personaStore } from '~/stores/personaStore'

const store = personaStore()
const { persona } = storeToRefs(store)
const realPersona = computed(() => persona.value?.real)
</script>
