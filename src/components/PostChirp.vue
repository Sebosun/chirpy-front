<script lang="ts">
import { useChirpStore } from '@/stores/chirpsStore'
import { Component, Vue } from 'vue-facing-decorator'
import { mapActions } from 'pinia'

@Component({
  methods: {
    ...mapActions(useChirpStore, ['fetchChirps'])
  }
})
export default class PostChirps extends Vue {
  message = ''

  async handlePostMessage() {
    try {
      const url = 'http://localhost:8080/api'
      const endPoint = 'chirps'
      const payload = {
        message: this.message
      }
      const token = localStorage.getItem('token')
      await fetch(`${url}/${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      })
      this.message = ''
      /* @ts-ignore */
      this.fetchChirps()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<template>
  <form>
    <input type="text" id="message" name="message" v-model="message" />
    <button @click.prevent="handlePostMessage">Send</button>
  </form>
</template>
