<template>
  <div class="py-12 max-w-xl mx-auto px-4 space-y-2">
    <form 
      @submit.prevent="login"
      class="space-x-4 flex">
      <input 
        type="password"
        v-model="password"
        class="border border-gray-300 rounded-md px-2 w-full"
        placeholder="enter your password">

      <button
        type="submit" 
        class="bg-green-500 text-white cursor-pointer px-2 py-1 rounded-md flex-none">
        login
      </button>
    </form>
    <transition>
      <span 
        v-if="errorMessage"
        class="px-2 py-1 rounded-md text-red-500">
        {{ errorMessage }}
      </span>
    </transition>
  </div>
</template>

<script setup>
  import { useStore } from '@/store/store'
  const store = useStore()

  const password = ref('')
  const errorMessage = ref('')

  const passwords = ref(['idkAlluvial1!', 'test123'])

  function login() {
    if(passwords.value.some(p => p === password.value)) {
      store.login()

      password.value = ''

      navigateTo('/tasks')

    } else {
      errorMessage.value = 'password is not correct'

      setTimeout(() => {
        errorMessage.value =''
      }, 3000)
    }
  }
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>