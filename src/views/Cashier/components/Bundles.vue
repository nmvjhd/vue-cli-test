<template>
  <div class="bundles">
    <ul>
      <li v-for="(item, index) in items" :focus-id="(index + 1) + '_1'">
        <span>{{ item.price }}</span>
        <span>{{ item.type }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'bundles',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .bundles{
    li{
      list-style: none;
      border: 1px solid rgba(202, 171, 109, 0.5);
    }
  }
</style>
