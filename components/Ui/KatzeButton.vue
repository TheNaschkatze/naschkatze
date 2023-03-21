<script setup lang="ts">
const emit = defineEmits(['click'])
withDefaults(defineProps<{
  type?: "button" | "submit" | "reset"
  variant?: "solid" | "ghost"
}>(), {
  type: "button",
  variant: "solid",
})

</script>

<template>
  <button
    :type="type"
    :class="[
        'inline-flex items-center rounded-md border justify-center border-transparent px-4 py-2 text-base font-medium',
        {
          solid: 'bg-primary text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          ghost: 'rounded-md bg-secondary py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-secondary-hover'
        }[variant]
    ]"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
