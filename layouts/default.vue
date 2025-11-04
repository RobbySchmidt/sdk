<template>
  <div class="relative pt-4">
    <button 
      v-if="store.loggedIn" 
      @click="logout" 
      class="bg-red-500 text-white cursor-pointer px-2 py-1 rounded-md flex-none absolute top-4 right-4">
      Logout
    </button>
    <slot />
  </div>
</template>

<script setup>
  import { useStore } from '@/store/store'
  const store = useStore()
  
  function logout() {
    store.logout()
    navigateTo('/login')
  }
</script>