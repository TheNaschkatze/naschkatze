<template>
  <ul class="flex justify-between py-2">
    <li>
      <KatzeLogo :dark-svg="githubMarkWhite" :light-svg="githubMark" :href="gitUrl" />
    </li>
    <li>
      <KatzeLogo :dark-svg="twitterLogoWhite" :light-svg="twitterLogo" :href="twitterUrl" />
    </li>
    <li>
      <KatzeLogo :dark-svg="EnvelopeIcon" :light-svg="EnvelopeIcon" :href="mailTo" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/20/solid'
import githubMark from '~/assets/icons/github/github-mark.svg'
import githubMarkWhite from '~/assets/icons/github/github-mark-white.svg'
import KatzeLogo from '~/components/Ui/KatzeLogo.vue'
import twitterLogo from '~/assets/icons/twitter/twitter-logo-black.svg'
import twitterLogoWhite from '~/assets/icons/twitter/twitter-logo-white.svg'

const gitUrl = 'https://github.com/TheNaschkatze'
const twitterUrl = 'https://twitter.com/theNaschkatze'
const mailTo = 'mailto:theNaschkatze@icloud.com'
</script>
