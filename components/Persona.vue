<template>
  <section class="flex flex-wrap md:unset-flex-wrap gap-4 m-12">
    <PersonaImage class="w-96 h-96 object-cover object-top"/>
    <div class="w-full md:w-2/3">
      <KatzeTypography element="h2"> {{ title }} </KatzeTypography>
      <KatzeTypography element="h1"> {{ name }} </KatzeTypography>
      <KatzeTypography element="p">
        I am a software engineer with a passion for building things that are beautiful in the in-, and in the outside. I
        come from Chile and live in Germany since 2017.
      </KatzeTypography>
    </div>
    <ul class="w-full md:w-1/3 flex items-center">
      <KatzeLogo :dark-svg="githubMarkWhite" :light-svg="githubMark" :url="gitUrl"/>
    </ul>
  </section>
</template>

<script setup lang="ts">
import KatzeTypography from "~/components/Ui/KatzeTypography.vue";
import githubMark from '~/assets/icons/github-mark.svg'
import githubMarkWhite from '~/assets/icons/github-mark-white.svg'
import KatzeLogo from "~/components/Ui/KatzeLogo.vue";

const darkStore = useDarkModeStore()
const name = computed(() => (darkStore.isEnabled ? "the Naschkatze" : `Javier Alonso \r\n Cerna Valenzuela`))
const title = computed(() => (darkStore.isEnabled ? "Hacker" : "Software Engineer"))

const gitUrl = "https://github.com/TheNaschkatze"
</script>

<style scoped>

</style>
