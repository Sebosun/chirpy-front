<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import ChirpsList from '@/components/ChirpsList.vue'
import PostChirp from '@/components/PostChirp.vue'

@Component({
  components: {
    ChirpsList,
    PostChirp
  }
})
export default class HomeView extends Vue {}
</script>

<template>
  <main>
    <PostChirp />
    <ChirpsList />
  </main>
</template>
