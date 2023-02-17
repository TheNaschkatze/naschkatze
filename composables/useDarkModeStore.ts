import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
export const useDarkModeStore = defineStore('darkMode1', () => {
  const darkMode = useCookie<boolean>('darkMode')
  const isEnabled = ref(darkMode.value === true)

  watch(isEnabled, (value) => {
    darkMode.value = value
    useColorMode().preference = value ? 'dark' : 'light'
  })

  return {
    isEnabled
  }
})
