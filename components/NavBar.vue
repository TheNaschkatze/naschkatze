<template>
  <Disclosure
    as="nav"
    class="bg-transparent dark:shadow-2xl shadow"
  >
    <div class="px-4 px-6 lg:px-8">
      <div class="flex h-16 justify-end">
        <div class="ml-6 flex items-center gap-4">
          <DarkModeSwitch />
          <NuxtLink
            class="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            to="/print-me"
            target="_blank"
          >
            <button
              tabindex="-1"
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <PrinterIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Print Me!
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
</script>
