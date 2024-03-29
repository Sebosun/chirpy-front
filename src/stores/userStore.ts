import { defineStore } from 'pinia'

export type User = {
  email: string
  id: number
  is_chirpy_red: false
  refresh_token: string
  token: string
}

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: undefined as User | undefined
    }
  },
  getters: {
    getUser: (state) => state.user,
    getIsLoggedIn: (state) => Boolean(state.user)
  },
  actions: {
    setUser(user: User) {
      this.user = user
    }
  }
})
