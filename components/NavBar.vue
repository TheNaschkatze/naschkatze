<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="bg-transparent dark:shadow-2xl shadow"
  >
    <div class="px-4 px-6 lg:px-8">
      <div class="flex h-16 justify-end">
        <div class="ml-6 flex items-center">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'
</script>
