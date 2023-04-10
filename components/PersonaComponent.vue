<template>
  <section class="flex flex-col lg:flex-row lg:items-start gap-4 items-center">
    <aside class="flex flex-col gap-4">
      <PersonaImage class="max-w-96 h-96 lg:float-left" />
      <SocialMediaBar class="w-full lg:w-96" />
    </aside>
    <div>
      <KatzeTypography class="text-center lg:text-left" element="h2">
        {{ title }}
      </KatzeTypography>
      <KatzeTypography class="text-center lg:text-left" element="h1">
        {{ name }}
      </KatzeTypography>
      <PersonaMetaData class="text-center lg:text-left" />
      <KatzeTypography element="p" class="mt-4">
        I am a software developer who currently resides in Germany. Originally from Chile, I have always had a passion for building things with code that not only look beautiful but are also elegantly written.
      </KatzeTypography>
      <KatzeTypography element="p">
        When I'm not busy coding, you'll likely find me dreaming about carving up the slopes on my skis. Skiing has been a logtime passion of mine, and I make a point to hit the mountains whenever I can. Of course, I also enjoy other activities, like going for a run or indulging in a few nerdy hobbies. But nothing quite compares to the thrill of skiing down a mountain, feeling the cold wind rush past me as I take in the breathtaking scenery around me.
      </KatzeTypography>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import { personaStore } from '~/stores/personaStore'

const store = personaStore()
const { persona } = storeToRefs(store)

const darkStore = useDarkModeStore()
const name = computed(() => (darkStore.isEnabled ? persona.value?.phantom.name : persona.value?.real.name))
const title = computed(() => (darkStore.isEnabled ? persona.value?.phantom.title : persona.value?.real.title))

</script>
