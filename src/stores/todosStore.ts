import { TodoList } from '@/types'
import { defineStore } from 'pinia'

const initialState = {
  count: 0,
  items: []
}
const useTodosStore = defineStore('todos', {
  state: () : TodoList => (initialState),
  actions: {

  }
})

export default useTodosStore
