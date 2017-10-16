<template>
  <div class="qrcode">
    <div>{{ url }}</div>
  </div>
</template>

<script>
  export default{
    name: 'qrcode',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .qrcode{
  }
</style>
