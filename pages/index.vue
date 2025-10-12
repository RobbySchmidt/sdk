<template>
  <div class="container mx-auto py-12">
    <div class="lg:w-8/12 mx-auto px-4 grid lg:grid-cols-3 gap-4">
      <Card :images="images"/>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from '@/store/store'
  import { storeToRefs } from 'pinia';

  const store = useStore()
  const { images } = storeToRefs(store)
</script>

<style scoped>

</style>