import { useStore } from '@/store/store'

export default defineNuxtRouteMiddleware(() => {
  const store = useStore()

  if (!store.loggedIn) {
    return navigateTo('/login')
  }
})