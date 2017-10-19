/**
 * Created by matengfei on 2017/10/19.
 */
import store from '@/store';

import { logExpect } from '../utils/expecttool';

describe('TodoList', () => {
  describe('Store', () => {
    it('should be add/del item correctly', () => {
      logExpect('aaa', store.state.todoList.items.length).to.equal(2);
      store.commit('todoList/add', {
        data: { name: '测试' },
        getters: store.getters,
      });
      logExpect('bbb', store.state.todoList.items.length).to.equal(3);
      logExpect('ccc', store.getters['todoList/curMaxId']).to.equal(3);
      logExpect('ddd', store.state.todoList.items[2].name).to.equal('测试');
      store.commit('todoList/del', 1);
      logExpect('eee', store.state.todoList.items.length).to.equal(2);
    });
  });
});
