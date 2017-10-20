/**
 * Created by matengfei on 2017/10/19.
 */
import { getters, mutations, actions } from '@/store/modules/todolist';

import { logExpect } from '../utils/expecttool';

describe('TodoList2', () => {
  describe('Store', () => {
    it('should be add/del item correctly', () => {
      const state = {
        items: [
          {
            id: 2,
            name: '李四',
            state: 1,
          },
        ],
      };
      mutations.add(state, {
        data: { name: '测试' },
        getters,
      });
      logExpect('bbb', state.items.length).to.equal(2);
      logExpect('ddd', state.items[1].name).to.equal('测试');
      mutations.del(state, 2);
      logExpect('eee', state.items.length).to.equal(1);
    });
    it('getters test', () => {
      const state = {
        items: [
          {
            id: 1,
            name: '张三',
            state: 1,
          },
          {
            id: 5,
            name: '王五',
            state: 1,
          },
        ],
      };
      logExpect('ccc', getters.curMaxId(state)).to.equal(5);
    });
  });
});
