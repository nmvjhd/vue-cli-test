/**
 * Created by matengfei on 2017/10/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;  // eslint-disable-line
    },
    decrement(state) {
      state.count--;  // eslint-disable-line
    },
    addN(state, n) {
      state.count += n; // eslint-disable-line
    },
  },
  actions: {
    addRandom(context) {
      setTimeout(() => {
        context.state.count += Math.ceil(Math.random() * 10); //eslint-disable-line
      });
    },
  },
  getters: {
    countChnState(state) {
      return state.count % 2 === 0 ? '偶数' : '奇数';
    },
  },
});
