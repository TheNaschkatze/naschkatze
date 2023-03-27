<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { SunIcon, MoonIcon, StarIcon, SparklesIcon } from '@heroicons/vue/20/solid'

const darkModeStore = useDarkModeStore()
const darkModeEnabled = computed({
  get: () => darkModeStore.isEnabled,
  set: (value) => {
    darkModeStore.isEnabled = value
  }
})

</script>

<template>
  <Switch
    v-model="darkModeEnabled"
    :class="[darkModeEnabled ? 'bg-primary/25' : 'bg-gray-200', 'relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2']"
  >
    <span class="sr-only">Switch dark-mode</span>
    <span :class="[darkModeEnabled ? 'translate-x-6' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white text-primary shadow ring-0 transition duration-200 ease-in-out']">
      <span
        :class="[darkModeEnabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
        aria-hidden="true"
      >
        <SunIcon />
      </span>
      <span
        :class="[darkModeEnabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
        aria-hidden="true"
      >
        <MoonIcon />
      </span>
    </span>
    <span :class="[darkModeEnabled ? '-translate-x-5' : '-translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform text-white ring-0 transition duration-200 ease-in-out']">
      <span
        :class="[darkModeEnabled ? 'opacity-0 ease-out duration-200' : 'opacity-100 ease-in duration-200', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
        aria-hidden="true"
      >
        <SparklesIcon :class="[darkModeEnabled ? 'translate-y-0.5 -translate-x-1':'-translate-y-0.5 translate-x-1', 'w-3 duration-300 transition-transform']" />
      </span>
      <span
        :class="[darkModeEnabled ? 'opacity-100 ease-in duration-100' : 'opacity-0 ease-out duration-100', 'absolute inset-0 flex h-full w-full items-center justify-center']"
        aria-hidden="true"
      >
        <StarIcon :class="[darkModeEnabled ? '-translate-y-1 -translate-x-1' : 'translate-y-1.5 translate-x-1', 'w-2 absolute ease-in duration-200 transition-transform']" />
        <StarIcon :class="[darkModeEnabled ? 'translate-y-1.5 translate-x-2.5' : 'translate-y-1.5 translate-x-1', 'w-1.5 absolute ease-out duration-200 transition-transform']" />
        <StarIcon :class="[darkModeEnabled ? '-translate-y-1.5 translate-x-2' : 'translate-y-1.5 translate-x-1', 'w-1 absolute ease-in duration-300 transition-transform']" />
        <StarIcon :class="[darkModeEnabled ? 'translate-y-1.5 -translate-x-1' : 'translate-y-1.5 translate-x-1', 'w-1 absolute ease-out duration-300 transition-transform']" />
        <StarIcon :class="[darkModeEnabled ? 'translate-x-1' : 'translate-y-1.5 translate-x-1', 'w-1 absolute ease-in duration-200 transition-transform']" />
      </span>
    </span>
  </Switch>
</template>
