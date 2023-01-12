import { defineStore } from 'pinia'

const initialState = {
  count: 0,
  todos: []
}
const useTodosStore = defineStore('todos', {
  state: () => (initialState),
  actions: {

  }
})

export default useTodosStore
