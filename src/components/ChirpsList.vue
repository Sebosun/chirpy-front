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
    const url = 'http://localhost:8080/api'
    const endPoint = 'chirps?sort=desc'
    const response = await fetch(`${url}/${endPoint}`)
    this.chirps = (await response.json()) as Chirp[]
  }

  mounted() {
    this.getChirps()
  }
}
</script>

<template>
  <div class="chirps-list">
    <div v-for="(chirp, index) in chirps" :key="index">
      <div class="chirps-list__post">
        {{ chirp.body }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chirps-list__post {
  padding: 10px 10px;
  margin: 10px 0;
  border: solid 1px #fff;
  border-radius: 12px;
}
</style>
