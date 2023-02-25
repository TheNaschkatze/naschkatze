<template>
  <section class="flex flex-col lg:flex-row lg:items-start gap-4 items-center">
    <PersonaImage class="max-w-96 h-96 mr-4 lg:float-left"/>
    <div>
      <KatzeTypography class='text-center lg:text-left' element="h2"> {{ title }} </KatzeTypography>
      <KatzeTypography class='text-center lg:text-left' element="h1"> {{ name }} </KatzeTypography>
      <PersonaMetaData />
      <KatzeTypography element="p">
        I am a software engineer with a passion for building things that are beautiful in the in-, and in the outside. I
        come from Chile and live in Germany since 2017.
      </KatzeTypography>
    </div>
  </section>
    <SocialMediaBar class="w-full lg:w-96 lg:mt-4"/>
</template>

<script setup lang="ts">
import KatzeTypography from "~/components/Ui/KatzeTypography.vue";

const darkStore = useDarkModeStore()
const name = computed(() => (darkStore.isEnabled ? "the Naschkatze" : `Alonso Cerna`))
const title = computed(() => (darkStore.isEnabled ? "Hacker" : "Software Engineer"))

</script>

