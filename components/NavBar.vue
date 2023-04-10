<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import KatzeButton from '~/components/Ui/KatzeButton.vue'
const route = useRoute()
const navigation = [
  {
    to: {
      name: 'index'
    },
    displayName: 'Experience'
  },
  {
    to: {
      name: 'inspiration'
    },
    displayName: 'Inspiration'
  }
  // { name: 'Education', href: '#', current: false },
  // { name: 'Awards', href: '#', current: false },
]

// check if is active nav
const isActive = (to: string) => {
  return to === route.name
}

</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Links -->
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <nuxt-link v-for="item in navigation" :key="item.to" :to="item.to" :class="[isActive(item.to)? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary']" :aria-current="isActive(item.to) ? 'page' : undefined">
              {{ item.displayName }}
            </nuxt-link>
          </div>
        </div>
        <!-- right side -->
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-2 text-gray-500 font-medium sr-only md:not-sr-only">
            This website is Keyboard friendly!
          </span>
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
    <!-- Mobile menu -->
    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
