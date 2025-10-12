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
  </div>
</template>

<script setup>
  const { $directus, $readItems, $createItem, $updateItem, $deleteItem } = useNuxtApp()

  const task = ref('')
  const tasks = ref([])

  onMounted(async () => {
    tasks.value = await $directus.request(
      $readItems(
        'tasks', { 
          fields: ['*'] 
        }
      ))
    }
  )

  async function addTask() {
    if (!task.value.trim()) return

    const newTask = await $directus.request(
      $createItem('tasks', { 
        task: task.value, done: false 
      })
    )

    tasks.value.push(newTask)
    task.value = ''
  }

  async function checkTask(id) {
    const task = tasks.value.find(t => t.id === id)
    if (!task) return

    task.done = !task.done

    await $directus.request(
      $updateItem('tasks', id, { 
        done: task.done 
      }
    ))
  }

  async function removeTask(id) {
    await $directus.request(
      $deleteItem('tasks', id)
    )
    tasks.value = tasks.value.filter(t => t.id !== id)
  }
</script>


<style scoped>

</style>