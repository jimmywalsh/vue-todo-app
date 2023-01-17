import { TodoList, TodoItem } from '@/types'
import { defineStore } from 'pinia'

export const initialState = {
  items: []
}
const useTodosStore = defineStore('todos', {
  state: () : TodoList => (initialState),
  actions: {
    addTodo(todo:TodoItem) {
      this.items.push(todo)
    },
    completeTodo(_todoText:string) {
      // not implemented yet
    }
  },
  getters: {
    active: (state): TodoItem[] => {
      return state.items.filter(item => item.completed === false)
    },
    activeCount(): number {
      return this.active.length
    },
    completed: (state): TodoItem[] => {
      return state.items.filter(item => item.completed === true)
    },
    completedCount(): number {
      return this.completed.length
    }
  }
})

export default useTodosStore
