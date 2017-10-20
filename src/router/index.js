import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import TodoList from '@/views/TodoList/App';
import Cashier from '@/views/Cashier/App';
import Counter from '@/views/Counter/App';

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
    {
      path: '/counter',
      component: Counter,
    },
  ],
});
