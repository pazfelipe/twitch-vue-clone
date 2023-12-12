import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    isModalOpened: false
  }),
  getters: {
    // isModalOpened: (state) => state.isModalOpened
  },
  actions: {
    toggleModal() {
      this.isModalOpened = !this.isModalOpened
    }
  }
})
