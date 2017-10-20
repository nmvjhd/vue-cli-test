/**
 * Created by matengfei on 2017/10/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import todoList from './modules/todolist';
import counter from './modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoList,
    counter,
  },
});
