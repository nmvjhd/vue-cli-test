// import Vue from 'vue';
// import Hello from '@/components/Hello';
// // const Hello = require('inject-loader!@/components/Hello');
//
// describe('Hello.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(Hello);
//     const vm = new Constructor().$mount();
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .to.equal('Welcome to Your Vue.js App');
//   });
// });

import MockObj from 'inject-loader!../../../src/views/TodoList/mockTest';

describe('mock', () => {
  let mockObj;
  before(() => {
    mockObj = MockObj({
      './mockObj': {
        aaa: 'ccc',
        ccc: () => 'fn2ccc',
      },
    });
  });

  it('mock aaa', () => {
    console.log(mockObj);
    expect(mockObj.aaa).to.equal('ccc');
    expect(mockObj.ccc()).to.equal('fnccc');
  });
});
