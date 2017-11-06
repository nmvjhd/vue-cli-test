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

// // Decorator function for logging
// function logger(target, name, descriptor) {
//   // obtain the original function
//   const fn = descriptor.value;
//
//   // create a new function that sandwiches
//   // the call to our original function between
//   // two logging statements
//   const newFn = function () {
//     console.log('starting %s', name);
//     fn.apply(target, arguments);
//     console.log('ending %s', name);
//   };
//
//   // we then overwrite the origin descriptor value
//   // and return the new descriptor
//   descriptor.value = newFn; // eslint-disable-line
//   return descriptor;
// }
//
// const example = {
//   @logger
//   logMe() {
//     console.log('I want to be logged');
//   },
// };
//
// function add(a, b) {
//   return a+b;
// }

function add(a, b, c) {
  return a + b + c;
}

const add2 = add.bind(null, 2);

console.log(add2(10, 20));
