/**
 * Created by matengfei on 2017/10/12.\
 * 存放于VUE相关的工具函数
 */
import Vue from 'vue';

export function renderComponentInVDOM(component, propsData) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({
    propsData,
  }).$mount();
  return vm;
}

export function renderComponent(component, propsData) {
  let $el = document.querySelector('#app');
  if (!$el) {
    $el = document.createElement('div');
    $el.setAttribute('id', 'app');
    document.body.appendChild($el);
  }

  const Constructor = Vue.extend(component);
  const vm = new Constructor({
    propsData,
  }).$mount($el);
  return vm;
}
