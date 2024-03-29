<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import ChirpsList from '@/components/ChirpsList.vue'

@Component({
  components: {
    ChirpsList
  }
})
export default class HomeView extends Vue {
  async request() {
    try {
      const url = 'http://localhost:8080'
      const endPoint = 'login'
      const returnval = await fetch(`${url}/${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'hehe', password: 'hehe' })
      })
      console.log(returnval)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<template>
  <main>
    <ChirpsList />
    <button @click="request">Make Request</button>
  </main>
</template>
