<script lang="ts" setup>
import useTodosStore from '@/stores/todosStore';

const todosStore = useTodosStore()

console.log('todosStore instantiated:', todosStore)
</script>

<template>
  <h1 class="text-3xl font-bold underline">Todos</h1>
</template>
