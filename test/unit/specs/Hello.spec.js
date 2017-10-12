import Vue from 'vue';
import Hello from '@/components/Hello';
import Hello2 from '@/components/Hello2';

function renderComponentInVDOM(component, propsData) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({
    propsData,
  }).$mount();
  return vm.$el;
}

describe('Hello', () => {
  it('should render correct contents', () => {
    const $el = renderComponentInVDOM(Hello, {
      msg: 'welcome',
    });
    expect($el.querySelector('.hello h1').textContent).to.equal('welcome');
    expect($el.querySelector('.hello h2').textContent).to.equal('welcome111');
  });
});

describe('Hello2', () => {
  it('should render correct contents', () => {
    const $el = renderComponentInVDOM(Hello2, {
      msg: 'welcome',
    });
    expect($el.querySelector('.hello2 h1').textContent).to.equal('welcome');
    expect($el.querySelector('.hello2 h2').textContent).to.equal('welcome111');
  });
});
