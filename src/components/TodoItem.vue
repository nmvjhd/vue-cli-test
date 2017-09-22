/**
* Created by matengfei on 2017/9/22.
*/

<template>
  <div class="todo-item">
    <span>{{item.id}}</span>
    <span>{{item.name}}</span>
    <span>{{item.state}}</span>
    <button @click="del">删除</button>
  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: [
      'item',
    ],
    methods: {
      del() {
        this.$emit('del');
      },
    },
  };
</script>

<style scoped>

</style>
