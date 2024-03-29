import { defineStore } from 'pinia'

type Chirp = {
  id: number
  body: string
  author_id: number
}

export const useChirpStore = defineStore('chirpStore', {
  state: () => {
    return {
      chirps: [] as Chirp[]
    }
  },
  getters: {
    getChirps: (state) => state.chirps
  },
  actions: {
    async fetchChirps() {
      try {
        const url = 'http://localhost:8080/api'
        const endPoint = 'chirps?sort=desc'
        const response = await fetch(`${url}/${endPoint}`)
        this.chirps = (await response.json()) as Chirp[]
      } catch (e) {
        console.error(e)
      }
    }
  }
})
