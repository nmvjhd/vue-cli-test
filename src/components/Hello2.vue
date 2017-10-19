<template>
  <div class="hello2">
    <div>this is hello2</div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {
  name: 'hello2',
  props: ['msg'],
  computed: {
    msg2() {
      return `${this.msg}111`;
    },
  },
  methods: {
    test() {
      return this.msg2;
    },
  },
//  data() {
//    return {
//      msg: 'Welcome to Your Vue.js App',
//    };
//  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" rel="stylesheet/less" scoped>
  .hello2{
    width: 300px;
    border: solid 1px black;

    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
  }
</style>
