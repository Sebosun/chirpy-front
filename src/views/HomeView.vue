<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import Chirps from '@/components/Chirps.vue'

@Component({
  components: {
    Chirps
  }
})
export default class HomeView extends Vue {}
</script>

<template>
  <main>
    <Chirps />
  </main>
</template>
