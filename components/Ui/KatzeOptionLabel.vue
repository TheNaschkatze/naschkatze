<template>
  <input
    :id="value"
    :name="name"
    :value="modelValue"
    class="form-radio mr-2 text-xl cursor-pointer text-primary focus:ring-primary"
    type="radio"
    @change="emit('update:modelValue', value)"
  >
  <label
    class="cursor-pointer text-xl"
    :for="label"
  >
    {{ label }}
  </label>
  <br>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  value: string,
  modelValue: string,
  label: string,
  name: string
}>()
</script>
