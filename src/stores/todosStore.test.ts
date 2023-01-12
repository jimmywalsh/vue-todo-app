import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import App from '@/App.vue'

import useTodosStore, { initialState } from '@/stores/todosStore';
import type { TodoItem } from '@/types'

describe('stores/WorkflowStore', () => {
  beforeEach(() => {
    mount(App, {
      global: {
        plugins: [
          createTestingPinia({
            initialState,
            stubActions: false,
          }),
        ],
      },
    });
  });

  describe('#state', () => {
    it('initializes store with initialState', () => {
      const store = useTodosStore();
      const state = store.$state;

      expect(state).toEqual(initialState);
    });
  });

  describe('#addTodo', () => {
    it('adds todo to the state', () => {
      const todoItem:TodoItem = {
        text: 'Call grandma',
        completed: false,
        createdAt: new Date()
      }
      const store = useTodosStore();
      const state = store.$state;

      store.addTodo(todoItem)

      expect(state.items).toEqual([todoItem]);
    })
  })

  describe('#active', () => {
    it('has a getter all the active todos', () => {
      const store = useTodosStore();
      const activeTodo:TodoItem = {
        text: 'Go to gym',
        completed: false,
        createdAt: new Date()
      }
      store.addTodo(activeTodo)

      expect(store.active[1]).toEqual(activeTodo)
      expect(store.activeCount).toEqual(2);
    })
  })

  describe('#completed', () => {
    it('has a getter all the completed todos', () => {
      const store = useTodosStore();
      const completedTodo:TodoItem = {
        text: 'Pick up groceries',
        completed: true,
        createdAt: new Date()
      }
      store.addTodo(completedTodo)

      expect(store.completed).toEqual([completedTodo])
      expect(store.completedCount).toEqual(1);
    })
  })
});
