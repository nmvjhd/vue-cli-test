/**
 * Created by matengfei on 2017/10/12.\
 * 存放于VUE相关的工具函数
 */
import Vue from 'vue';
import Vuex from 'vuex';

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

export function renderComponentUseVuex(components, template, moduleName, moduleStore) {
  let $el = document.querySelector('#app');
  if (!$el) {
    $el = document.createElement('div');
    $el.setAttribute('id', 'app');
    document.body.appendChild($el);
  }

  Vue.use(Vuex);
  const vm = new Vue({
    el: $el,
    template,
    components,
    store: new Vuex.Store({
      modules: {
        [moduleName]: moduleStore,
      },
    }),
  });
  return vm;
}
