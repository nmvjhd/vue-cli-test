<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="top-controls">
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
    <p>
      <router-link to="/todo-list">TodoList</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    back() {
      console.log(this.router);
      this.router.go(-1);
    },
    forward() {
      this.router.go(1);
    },
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
