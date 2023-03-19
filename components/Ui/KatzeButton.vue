<script setup lang="ts">
const emit = defineEmits(['click'])
withDefaults(defineProps<{
  type?: "primary" | "secondary"
}>(), {
  type: "primary",
})

</script>

<template>
  <button
    tabindex="-1"
    type="button"
    :class="[
        'inline-flex items-center rounded-md border justify-center border-transparent px-4 py-2 text-base font-medium',
        {
          primary: 'bg-primary text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          secondary: 'rounded-md bg-secondary py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-secondary-hover'
        }[type]
    ]"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
