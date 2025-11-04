<template>
  <div class="py-12 max-w-xl mx-auto px-4 space-y-2">
    <form 
      @submit.prevent="addTask"
      class="space-x-4 flex">
      <input 
        type="text"
        v-model="task"
        class="border border-gray-300 rounded-md px-2 w-full"
        placeholder="add a new Task">

      <button
        type="submit" 
        class="bg-green-500 text-white cursor-pointer px-2 py-1 rounded-md flex-none">
        Add task
      </button>
    </form>

    <ul>
      <li 
        v-for="task in tasks" 
        class="flex gap-2 items-center justify-between space-y-2">
        <span :class="task.done ? 'line-through' : ''">
          {{ task.task }}
        </span>

        <div class="space-x-1">
          <button
            @click="checkTask(task.id)" 
            class="text-white cursor-pointer p-1 rounded-full"
            :class="task.done ? 'bg-green-500' : 'bg-yellow-500'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

          </button>
          <button
            @click="removeTask(task.id)" 
            class="bg-red-500 text-white cursor-pointer p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </li>
    </ul>

    <pre>{{ tasks }}</pre>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
  
  import { v4 as uuidv4 } from 'uuid';

  const task = ref<string>('')

  interface TaskItem {
    task: string,
    id: string,
    done: boolean
  }

  const tasks = ref<TaskItem[]>([])

  function addTask(): void {
    if(task.value)
    tasks.value.push({task: task.value, id: uuidv4(), done: false})

    task.value = ''
  }

  function checkTask(id: string): void {
    const task = tasks.value.find(t => t.id === id)
    if(task)

    task.done = !task.done
  }

  function removeTask(id: string): void {
    const index = tasks.value.findIndex(t => t.id === id)

    if(index !== -1) {
      tasks.value.splice(index, 1)
    }
  }
</script>

<style scoped>

</style>