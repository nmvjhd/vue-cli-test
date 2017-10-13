// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import store from '../src/store';
// import App from './App';
// import router from './router';
//
// Vue.config.productionTip = false;
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//   store,
// });

import Vue from 'vue';
import Hello2 from './components/Hello2';

// function renderComponent(component, propsData) {
//   // new Vue({ // eslint-disable-line
//   //   el: '#app',
//   //   components: { component },
//   //   props: propsData,
//   // });
//   /* eslint-disable no-new */
//   new Vue({
//     el: '#app',
//     components: { Hello2 },
//     props: propsData,
//   });
// }
//
// renderComponent(Hello2, {
//   msg: 'abc',
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<hello2 :msg="this.msg"/>',
  components: {
    Hello2,
  },
  data: () => ({
    msg: 'abc',
  }),
});
