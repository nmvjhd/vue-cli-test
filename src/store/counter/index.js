/**
 * Created by matengfei on 2017/10/19.
 */

const state = {
  count: 0,
};

export const getters = {
  countChnState(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数';
  },
};

export const mutations = {
  increment(state) {
    state.count++;  // eslint-disable-line
  },
  decrement(state) {
    state.count--;  // eslint-disable-line
  },
  addN(state, n) {
    state.count += n; // eslint-disable-line
  },
};

export const actions = {
  addRandom(context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.state.count += Math.ceil(Math.random() * 10); //eslint-disable-line
        resolve();
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
