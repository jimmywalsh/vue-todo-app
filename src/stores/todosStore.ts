import { TodoList } from '@/types'
import { defineStore } from 'pinia'

export const initialState = {
  completedCount: 0,
  activeCount: 0,
  items: []
}
const useTodosStore = defineStore('todos', {
  state: () : TodoList => (initialState),
  actions: {

  }
})

export default useTodosStore
