<script lang="ts" setup>
import useTodosStore from '@/stores/todosStore'
import { TodoItem } from '@/types';
import { ref } from 'vue'

const { addTodo } = useTodosStore()
const currentTodoText = ref('')

const handleAddTodo =() => {
  const todo: TodoItem = {
    text: currentTodoText.value,
    completed: false,
    createdAt: new Date()
  }

  addTodo(todo)
}
</script>

<template>
  <div class="my-2">
    <input v-model="currentTodoText" class="rounded" type="text" placeholder="New To-do" />
    <button @click="handleAddTodo" type="button" class="bg-indigo-500 h-10 rounded w-24 mx-1 ">
      Save
    </button>
  </div>
</template>
