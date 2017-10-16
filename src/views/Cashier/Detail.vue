<template>
  <div class="detail">
    <div class="content">
      <div>{{ bundle.type }}套餐</div>
      <div>请扫码支付:{{ bundle.price }}元</div>
      <div>切换其他套餐试试，有惊喜</div>
      <div>{{ bundle.description }}</div>
    </div>
    <div class="footer">
      <div focus-id="1_2">《奇异果VIP购买说明》</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'detail',
    props: {
      bundle: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .detail{
  }
</style>
