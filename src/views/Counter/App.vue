/**
* Created by matengfei on 2017/9/22.
*/

<template>
  <div class="counter">
    <span>{{ count }}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addRandom">addRandom</button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default{
    name: 'counter',
    computed: {
      ...mapState('counter', ['count']),
    },
    methods: {
      ...mapMutations('counter', ['increment', 'decrement']),
      ...mapActions('counter', ['addRandom']),
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
