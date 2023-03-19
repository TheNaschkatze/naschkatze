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
            <KatzeButton>
              <PrinterIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Print Me!
            </KatzeButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import KatzeButton from "~/components/Ui/KatzeButton.vue";
</script>
