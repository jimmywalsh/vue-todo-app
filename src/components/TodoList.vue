<script lang="ts" setup>
import useTodosStore from '@/stores/todosStore';

const todosStore = useTodosStore()

const { activeCount, completedCount } = todosStore
</script>

<template>
  <div class="columns-1">
  <h1 class="text-5xl font-bold underline">Todos</h1>
  <hr />
  <section>
    <h2 class="text-3xl font-semi-bold">Active ({{ activeCount }})</h2>
  </section>
  <section>
    <h2 class="text-3xl font-semi-bold">Completed ({{  completedCount }})</h2>
  </section>
  </div>
</template>
