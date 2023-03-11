<template>
  <section class="flex flex-col items-center w-full">
    <form class="flex flex-col gap-4">
      <KatzeTypography element="h3">
        Answer the quiz to unlock!
      </KatzeTypography>
      <fieldset class="text-stone-800">
        <legend class="font-bold">
          {{ quizz[0].question }}
        </legend>
        <KatzeOptionLabel v-model="picked" :label="quizz[0].option1" :value="quizz[0].option1" :name="quizz[0].question" />
        <KatzeOptionLabel v-model="picked" :label="quizz[0].option2" :value="quizz[0].option2" :name="quizz[0].question" />
        <KatzeOptionLabel v-model="picked" :label="quizz[0].option3" :value="quizz[0].option3" :name="quizz[0].question" />
      </fieldset>
    </form>
  </section>
</template>
<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeOptionLabel from '~/components/Ui/KatzeOptionLabel.vue'

defineProps({ quizz: [] })
const picked = ref()
</script>
