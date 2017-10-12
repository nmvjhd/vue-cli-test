<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="top-controls">
      <div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="gotoTodoList">TodoList2</button>
        <button @click="gotoHello">Hello2</button>
        <button @click="plusCount">++</button>
        <button @click="minusCount">--</button>
      </div>
      <div>
        <input type="text" v-model="abc">
        <button @click="addN">AddN</button>
      </div>
    </div>
    <p>
      <router-link to="/todo-list">TodoList</router-link>
    </p>
    <router-view></router-view>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    abc: 0,
  }),
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    gotoTodoList() {
      this.$router.push('/todo-list');
    },
    gotoHello() {
      this.$router.push('/');
    },
    plusCount() {
      this.$store.commit('increment');
    },
    minusCount() {
      this.$store.commit('decrement');
    },
    addN() {

    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    abc() {
      return this.$store.state.abc;
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
