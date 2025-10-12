<template>
  <NuxtLink
    v-if="images" 
    v-for="image in images"
    :to="image.id"
    class="rounded-md overflow-hidden border border-gray-300 shadow-md cursor-pointer lg:hover:scale-105 duration-300 ease-in-out">
    <img 
      v-if="image.image"
      :src="image.image" 
      :alt="image.title">
    <span 
      v-if="image.title"
      class="block text-center py-1 font-semibold">
      {{ image.title }}
    </span>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    images: Object
  })
</script>

<style scoped>

</style>