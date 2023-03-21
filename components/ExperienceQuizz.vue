<template>
  <form
      v-on:submit.prevent=""
      class="flex flex-col gap-4 lg:w-1/2 mx-auto"
  >
    <KatzeTypography element="h3" class="text-stone-900 pr-12 md:p-unset">
      Answer the quiz to unlock!
    </KatzeTypography>
    <fieldset class="text-stone-800">
      <legend class="font-bold text-xl">
        {{ quizz[0].question }}
      </legend>
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option1" :value="quizz[0].option1" :name="quizz[0].question" />
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option2" :value="quizz[0].option2" :name="quizz[0].question" />
      <KatzeOptionLabel v-model="picked" :label="quizz[0].option3" :value="quizz[0].option3" :name="quizz[0].question" />
      <transition>
        <p v-if="showError" class="bg-error text-black text-xl mt-1 p-0.5" >Wrong! Please try a different answer!</p>
      </transition>
    </fieldset>
    <div class="flex gap-2">
      <KatzeButton
          type="submit"
          @click="checkAnswer"
          class="w-full">
        Submit
      </KatzeButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import KatzeTypography from '~/components/Ui/KatzeTypography.vue'
import KatzeOptionLabel from '~/components/Ui/KatzeOptionLabel.vue'
import KatzeButton from "~/components/Ui/KatzeButton.vue";

const props = defineProps({ quizz: [] })
const emit = defineEmits(['unlock'])
const picked = ref()
const showError = ref(false)

if (props.quizz.length === 0) {
  createError('No quizz provided!')
}

const checkAnswer = () => {
  if (picked.value === props.quizz[0].correctAnswer) {
    showError.value = false
    emit('unlock')
    return
  } else {
    showError.value = true
  }
}
</script>

<style lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
