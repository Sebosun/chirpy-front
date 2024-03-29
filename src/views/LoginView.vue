<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import ChirpsList from '@/components/ChirpsList.vue'
import type { User } from '@/stores/userStore'
import { useUserStore } from '@/stores/userStore'
import { mapActions } from 'pinia'

@Component({
  setup() {
    const store = useUserStore()
    return { store }
  },
  components: {
    ChirpsList
  },
  methods: {
    ...mapActions(useUserStore, ['setUser'])
  }
})
export default class HomeView extends Vue {
  password = ''
  email = ''

  isRegister = false

  async handleSubmit() {
    if (this.isRegister) {
      this.handleRegistration()
      return
    }

    this.handleLogin()
  }

  async handleRegistration() {
    try {
      const url = 'http://localhost:8080/api'
      const endPoint = 'users'
      const payload = {
        email: this.email,
        password: this.password
      }

      await fetch(`${url}/${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
    } catch (e) {
      console.error(e)
    }
  }

  async handleLogin() {
    try {
      const url = 'http://localhost:8080/api'
      const endPoint = 'login'
      const payload = {
        email: this.email,
        password: this.password
      }
      const response = await fetch(`${url}/${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const userDet = (await response.json()) as User
      localStorage.setItem('token', userDet.token)
      localStorage.setItem('refreshToken', userDet.token)
      /* @ts-ignore */
      this.setUser(userDet)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<template>
  <form class="login-view" @submit.prevent.stop="handleSubmit">
    <label class="login-view__label" for="email">
      Email
      <input type="text" id="email" name="email" v-model="email" />
    </label>

    <label class="login-view__label" for="password">
      Password
      <input type="password" id="password" name="password" v-model="password" />
    </label>
    <label class="login-view__checkbox" for="registration">
      Register?
      <input type="checkbox" v-model="isRegister" />
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
.login-view {
  display: grid;
  gap: 5px;
  align-items: center;
  width: 100%;
}

.login-view__label {
  display: grid;
}

.login-view__checkbox {
  display: flex;
  gap: 4px;
}
</style>
