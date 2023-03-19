<template>
  <form class="flex flex-col gap-4 lg:w-1/2 mx-auto">
    <KatzeTypography element="h3">
      Answer the quiz to unlock!
    </KatzeTypography>
    <fieldset class="text-stone-800">
      <legend class="font-bold text-xl">
        {{ quizz[0].question }}
      </legend>
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option1" :value="quizz[0].option1" :name="quizz[0].question" />
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option2" :value="quizz[0].option2" :name="quizz[0].question" />
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option3" :value="quizz[0].option3" :name="quizz[0].question" />
    </fieldset>
    <div class="flex gap-2">
      <KatzeButton class="w-full">
        Submit
      </KatzeButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeOptionLabel from '~/components/Ui/KatzeOptionLabel.vue'
import KatzeButton from "~/components/Ui/KatzeButton.vue";

defineProps({ quizz: [] })
const picked = ref()
</script>
