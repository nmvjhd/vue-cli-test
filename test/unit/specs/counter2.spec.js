/**
 * Created by matengfei on 2017/10/19.
 */
import { mutations, actions } from '@/store/modules/counter';

import { logExpect } from '../utils/expecttool';

describe('Counter2', () => {
  describe('Store', () => {
    const state = {
      count: 0,
    };
    it('should be add/sub item correctly', () => {
      logExpect('original count', state.count).to.equal(0);
      mutations.increment(state);
      logExpect('add 1 count', state.count).to.equal(1);
      mutations.decrement(state);
      logExpect('sub 1 count', state.count).to.equal(0);
    });

    it('should add randomly', async () => {
      const state = {
        count: 0,
      };
      await actions.addRandom({ state });
      logExpect('add one times', state.count).to.be.above(0);
      await actions.addRandom({ state });
      logExpect('add two times', state.count).to.be.above(0);
      await actions.addRandom({ state });
      logExpect('add three times', state.count).to.be.above(0);
    });
  });
});
