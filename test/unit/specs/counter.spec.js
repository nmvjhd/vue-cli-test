/**
 * Created by matengfei on 2017/10/19.
 */
import store from '@/store';

import { logExpect } from '../utils/expecttool';

describe('Counter', () => {
  describe('Store', () => {
    it('should be add/sub item correctly', () => {
      logExpect('original count', store.state.counter.count).to.equal(0);
      store.commit('counter/increment');
      logExpect('add 1 count', store.state.counter.count).to.equal(1);
      store.commit('counter/decrement');
      logExpect('sub 1 count', store.state.counter.count).to.equal(0);
    });

    it('should add randomly', async () => {
      await store.dispatch('counter/addRandom');
      logExpect('add one times', store.state.counter.count).to.be.above(0);
      await store.dispatch('counter/addRandom');
      logExpect('add two times', store.state.counter.count).to.be.above(0);
      await store.dispatch('counter/addRandom');
      logExpect('add three times', store.state.counter.count).to.be.above(0);
    });
  });
});
