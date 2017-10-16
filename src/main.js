// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from '../src/store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});

// import Vue from 'vue';
// // import Hello2 from './components/Hello2';
// import MyComponent from './components/MyComponent';
//
// function renderComponent(component, propsData) {
//   // new Vue({ // eslint-disable-line
//   //   el: '#app',
//   //   components: { component },
//   //   props: propsData,
//   // });
//
// //   /* eslint-disable no-new */
// //   new Vue({
// //     el: '#app',
// //     components: { Hello2 },
// //     data: propsData,
// //     computed: {
// //       computedMSG() {
// //         return `${this.msg}aax`;
// //       },
// //     },
// //     template: `
// // <hello2 :msg="computedMSG">
// //   <div slot="slot1" v-if="msg.length % 2 === 0">测试slot1</div>
// //   <div slot="slot2" v-else>测试slot2</div>
// // </hello2>`,
// //   });
//
//   /* eslint-disable no-new */
//   new Vue({
//     el: '#app',
//     components: { MyComponent },
//     data: propsData,
//     computed: {
//       computedMSG() {
//         return `${this.msg}aax`;
//       },
//     },
//     template: '<my-component is="hello2"/>',
//   });
// }
//
// renderComponent(MyComponent, {
//   msg: 'abcd',
// });
//
// // Vue.config.productionTip = false;
// //
// // /* eslint-disable no-new */
// // new Vue({
// //   el: '#app',
// //   template: '<hello2 :msg="this.msg"/>',
// //   components: {
// //     Hello2,
// //   },
// //   data: () => ({
// //     msg: 'abc',
// //   }),
// // });
