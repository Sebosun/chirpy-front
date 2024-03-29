<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component
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
