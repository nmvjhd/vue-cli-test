/**
 * Created by matengfei on 2017/9/22.
 */

<template>
  <div class="todo-list">
    <div class="header">
      <input class="todo-input" v-model="newItem"/>
      <button class="add-button" @click="func">添加</button>
    </div>
    <div class="content">
      <ul class="data-list">
        <li  v-for="item in items" :key="item.id">
          <todo-item :item="item" @del="del(item.id)"></todo-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import TodoItem from './TodoItem';

  export default{
    components: { TodoItem },
    name: 'todo-list',
    data() {
      return {
        newItem: null,
      };
    },
    computed: {
      ...mapState('todoList', ['items']),
    },
    methods: {
      ...mapMutations('todoList', ['add', 'del']),
//      add() {
//        this.$store.commit('todoList/add')
//      },
      func() {
        this.add({
          data: {
            name: this.newItem,
          },
          getters: this.$store.getters,
        });
      },
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
