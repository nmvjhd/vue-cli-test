/**
 * Created by matengfei on 2017/10/19.
 */

const state = {
  items: [
    {
      id: 1,
      name: '张三',
      state: 1,
    },
    {
      id: 2,
      name: '李四',
      state: 1,
    },
  ],
};

export const getters = {
  curMaxId(state) {
    const curIds = state.items.map(item => item.id);
    return Math.max(...curIds);
  },
};

export const mutations = {
  add(state, { data, getters }) {
    const newId = getters['todoList/curMaxId'] + 1;
    state.items = [...state.items, {  // eslint-disable-line
      id: newId,
      name: data.name,
      state: 1,
    }];
  },
  del(state, id) {
    state.items = state.items.filter(item => item.id !== id);  // eslint-disable-line
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
