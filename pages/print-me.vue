<template>
  <div class="bg-white prose-lg">
    <h1>{{ realPersona.name }} | {{ realPersona.title }}</h1>
    <img class="w-96 h-96 my-0 mr-4 float-left" :src="javier" alt="Javier Cerna">
    <table>
      <thead class="sr-only">
        <tr>
          <th>
            Label
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Birthday</td>
          <td>{{ realPersona.birthday }}</td>
        </tr>
        <tr>
          <td>Birthplace</td>
          <td>{{ realPersona.birthplace }}</td>
        </tr>
        <tr>
          <td>Living in</td>
          <td>{{ realPersona.location }}</td>
        </tr>
        <tr>
          <td>Current Job</td>
          <td>{{ realPersona.workplace }}</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>/{{ realPersona.github }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{ realPersona.email }}</td>
        </tr>
        <tr>
          <td>website</td>
          <td>{{ realPersona.website }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { personaStore } from '~/stores/personaStore'
import javier from '~/assets/images/javier.jpg'

definePageMeta({
  layout: ''
})

const store = personaStore()
const { persona } = storeToRefs(store)
const realPersona = computed(() => persona.value?.real)
</script>

<style lang="scss" scoped>

</style>
