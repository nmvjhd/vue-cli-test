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
  return vm.$el;
}

export function test() {

}
