import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import TodoList from '@/views/TodoList/TodoList';
import Cashier from '@/views/Cashier/App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
    },
    {
      path: '/todo-list',
      component: TodoList,
    },
    {
      path: '/cashier',
      component: Cashier,
    },
  ],
});
