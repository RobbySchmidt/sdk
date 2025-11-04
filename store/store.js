import { defineStore } from 'pinia'
import data from '@/data'

export const useStore = defineStore('store', {
  state: () => ({ 
    images: data.images,
    loggedIn: false
  }),

  getters: {
    getImageById: (state) => {
      return (Id) => state.images.find((img) => img.id === Id)
    },
  },

  actions: {
    deleteImage(id) {
      this.images = this.images.filter(img => img.id !== id)
    },

    login() {
      this.loggedIn = true
    },

    logout() {
      this.loggedIn = false
    }
  },
})