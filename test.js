/**
 * Created by matengfei on 2017/10/20.
 */
// import Vue from 'vue';
// import Vuex from 'vuex';
// import Counter from '@/views/Counter/App';
//
// Vue.use(Vuex);
//
// const viewModel = new Vue({
//   template: '<div><counter ref="counter"></counter></div>',
//   components: {
//     Counter,
//   },
// });
//
// console.log(viewModel.$refs);
// viewModel.$data.msg = 'jdksjfdk';
// viewModel.$nextTick(() => {
//   console.log(viewModel.abc);
// });
// console.log(viewModel.abc);
// function fn4() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(100);
//     }, 2000);
//   });
// }
//
// async function fn2() {
//   console.log('fn2');
//   await fn4();
//   console.log('fn22');
// }
//
// function fn3() {
//   console.log('fn3');
// }
//
// function fn1() {
//   console.log('fn1');
//   fn2();
//   fn3();
// }
//
// fn1();

const bbb = 'bbb_';
const ccc = 'ccc_';

function a({aaa, bbb, ccc}) {
  console.log(aaa, bbb, ccc);
}

a({
  aaa: 'aaa_',
});
