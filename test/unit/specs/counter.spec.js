/**
 * Created by matengfei on 2017/10/19.
 */
// import store from '@/store';
import counterStore from '@/store/modules/counter';
import Counter from '@/views/Counter/App';
import { add } from '@/views/Counter/funcs';

import { logExpect } from '../utils/expecttool';
import { renderComponentUseVuex } from '../utils/vuetool';

describe('Counter', () => {
  // describe('Store', () => {
  //   it('should be add/sub item correctly', () => {
  //     logExpect('original count', store.state.counter.count).to.equal(0);
  //     store.commit('counter/increment');
  //     logExpect('add 1 count', store.state.counter.count).to.equal(1);
  //     store.commit('counter/decrement');
  //     logExpect('sub 1 count', store.state.counter.count).to.equal(0);
  //   });
  //
  //   it('should add randomly', async () => {
  //     await store.dispatch('counter/addRandom');
  //     logExpect('add one times', store.state.counter.count).to.be.above(0);
  //     await store.dispatch('counter/addRandom');
  //     logExpect('add two times', store.state.counter.count).to.be.above(0);
  //     await store.dispatch('counter/addRandom');
  //     logExpect('add three times', store.state.counter.count).to.be.above(0);
  //   });
  // });

  describe('Component', () => {
    it('should be render correctly', () => {
      const counter = renderComponentUseVuex({ Counter }, '<counter ref="counter"></counter>', 'counter', counterStore);
      console.log(counter);
      counter.$refs.counter.increment();
      logExpect('counter', counter.$refs.counter.count).to.equal(1);
    });
  });

  describe('Utils', () => {
    it('return the sum of a and b', () => {
      expect(add(10, 22)).to.equal(32);
    });
  });
});
