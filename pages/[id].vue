<template>
  <div class="container mx-auto py-12">
    <div class="lg:w-8/12 mx-auto px-4">
      <div
        class="rounded-md overflow-hidden border border-gray-300 shadow-md relative">
        <img 
          v-if="image.image"
          :src="image.image" 
          :alt="image.title">
        <div 
          v-if="image.description"
          v-html="image.description"
          class="text-center p-2 font-semibold">
        </div>
        <button 
          @click="deleteFile(image.id)"
          class="bg-red-500 text-white cursor-pointer px-2 py-1 absolute top-0 right-0 rounded-bl-md">
          delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from '@/store/store'
  import { navigateTo } from 'nuxt/app'

  const { params } = useRoute()
  const { getImageById, deleteImage } = useStore()

  const image = computed(() => {
    return getImageById(params.id)
  })

  function deleteFile(id) {
    deleteImage(id)
    navigateTo('/')
  }
</script>

<style scoped>

</style>