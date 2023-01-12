import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import App from '@/App.vue'

import useTodosStore, { initialState } from '@/stores/todosStore';

vi.mock('@/utilities/api', async () => {
  return {
    postWorkflow: vi.fn(),
  };
});

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
});
