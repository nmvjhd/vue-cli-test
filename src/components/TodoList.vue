/**
 * Created by matengfei on 2017/9/22.
 */

<template>
  <div class="todo-list">
    <div class="header">
      <input class="todo-input" v-model="newItem"/>
      <button class="add-button" @click="onAdd">添加</button>
    </div>
    <div class="content">
      <ul class="data-list">
        <li  v-for="item in items" :key="item.id">
          <todo-item :item="item" @del="onDel(item.id)"></todo-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  import TodoListData from '../store/TodoList';

  export default{
    components: { TodoItem },
    name: 'todo-list',
    data() {
      return {
        newItem: null,
        items: [],
      };
    },
    methods: {
      onAdd() {
        this.itemManager.add(this.newItem);
      },
      onDel(id) {
        this.items = this.itemManager.del(id);
      },
    },
    created() {
      this.itemManager = new TodoListData();
      this.items = this.itemManager.get();
    },
  };
</script>

<style scoped>
  .todo-list{
    width:300px;
    margin:auto;
    border:solid 1px red;
  }
</style>
