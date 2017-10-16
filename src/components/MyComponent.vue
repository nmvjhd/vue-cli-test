<template>
  <div class="my-component">
    <slot name="is"></slot>
  </div>
</template>

<script>
export default {
  name: 'myComponent',
//  props: ['is'],
//  data() {
//    return {
//      msg: 'Welcome to Your Vue.js App',
//    };
//  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
