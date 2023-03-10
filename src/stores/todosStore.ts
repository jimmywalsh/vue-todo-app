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
    completeTodo(text:string) {
      const foundItem = this.items.findIndex(item => item.text === text)
      this.items[foundItem].completed = true
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
