<script lang="ts" setup>
import useTodosStore from '@/stores/todosStore'
import CreateTodo from '@/components/CreateTodo.vue'
import { storeToRefs } from 'pinia'

const todosStore = useTodosStore()
const { completeTodo } = todosStore
const { activeCount, active, completed, completedCount } = storeToRefs(todosStore);

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
  <h1 class="text-5xl font-bold underline">Todos</h1>
  <hr />
  <CreateTodo />
  <hr />
  <section>
    <h2 class="text-3xl font-semi-bold">Active ({{ activeCount }})</h2>
    <ul v-for="todo in active">
      <li>
        <input @click="completeTodo(todo.text)" type="checkbox" id="scales" name="scales">
        <label for="scales">{{todo.text}}</label>
      </li>
    </ul>
  </section>
  <section>
    <h2 class="text-3xl font-semi-bold">Completed ({{  completedCount }})</h2>
    <div>
      <li v-for="todo in completed">
        {{ todo.text }} /{{ todo.createdAt }}
      </li>
    </div>
  </section>
  </div>
</template>
