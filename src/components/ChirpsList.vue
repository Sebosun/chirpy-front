<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import { useChirpStore } from '@/stores/chirpsStore'
import { mapActions, storeToRefs } from 'pinia'
// Define the component in class-style

@Component({
  setup() {
    const store = useChirpStore()
    const { chirps } = storeToRefs(store)
    return { chirps }
  },
  methods: {
    ...mapActions(useChirpStore, ['fetchChirps'])
  }
})
export default class Chirps extends Vue {
  mounted() {
    this.fetchChirps()
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
