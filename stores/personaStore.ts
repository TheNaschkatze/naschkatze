import { Persona } from '~/content/types/persona'

export const personaStore = defineStore('personaStore', () => {
  const persona = ref<Persona | undefined>()
  async function fillStore () {
    const { data } = await useAsyncData('persona', () => queryContent('/persona').findOne())
    // merge real and phantom data if attribute is missing in phantom.
    persona.value = {
      real: {
        ...data.value?.real
      },
      phantom: {
        ...data.value?.real,
        ...data.value?.phantom
      }
    } as Persona | undefined
  }

  if (persona.value === undefined) {
    // eslint-disable-next-line no-void
    void fillStore()
  }

  return {
    persona
  }
})
