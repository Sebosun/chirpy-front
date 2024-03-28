<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

type Chirp = {
  id: number
  body: string
  author_id: number
}
// Define the component in class-style
@Component
export default class Chirps extends Vue {
  // Class properties will be component data
  chirps = [] as Chirp[]

  async getChirps() {
    const url = 'http://localhost:8080'
    const endPoint = 'api/chirps'
    const response = await fetch(`${url}/${endPoint}`)
    this.chirps = (await response.json()) as Chirp[]
  }

  mounted() {
    this.getChirps()
  }
}
</script>

<template>
  <div>
    <div v-for="(chirp, index) in chirps" :key="index">
      {{ chirp }}
    </div>
  </div>
</template>
