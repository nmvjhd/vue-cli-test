/**
 * Created by Administrator on 2017/9/24.
 */
import Vue from 'vue';
import TodoList from '@/views/TodoList/TodoList';
import DataProvider from '@/views/TodoList/DataProvider';
import { getTodoList } from '@/views/TodoList/Interface';

function add(a, b) {
  return a + b;
}

describe('TodoList', () => {
  describe('Component', () => {
    let vm = null;
    before(() => {
      const Constructor = Vue.extend(TodoList);
      vm = new Constructor().$mount();
    });
    it('should be have two items', () => {
      expect(vm.$el.querySelectorAll('.todo-list .data-list li').length).to.equal(2);
    });
    it('add delete item test', () => {
      vm.$el.querySelector('.todo-list .todo-input').value = 'mmm';
      vm.$el.querySelector('.todo-list .add-button').click();
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.todo-list .data-list li').length).to.equal(3);

        vm.$el.querySelector('.todo-item button').click();
        setTimeout(() => {
          expect(vm.$el.querySelectorAll('.todo-list .data-list li').length).to.equal(2);
        });
      });
    });
    it('should return sum of a and b', () => {
      expect(add(10, 20)).to.equal(33);
    });
  });

  describe('DataProvider', () => {
    let provider = null;
    before(() => {
      provider = new DataProvider();
    });
    it('should be add a item', () => {
      expect(provider.add('haha').length).to.equal(3);
    });
    it('should del a item', () => {
      expect(provider.del(2).length).to.equal(2);
    });
  });

  describe('Network', () => {
    it('get list', async () => {
      // getTodoList().then((list) => {
      //   expect(list).to.be.a('array');
      //   done();
      // }, (err) => {
      //   done(err);
      // });
      const list = await getTodoList();
      expect(list).to.be.a('array')
        .to.have.lengthOf(2);
    });
  });
});
