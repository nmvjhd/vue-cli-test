<template>
  <div class="qrcode">
    <qr-code :text="url"></qr-code>
  </div>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component';

  export default{
    name: 'qrcode',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
    components: {
      'qr-code': VueQRCodeComponent,
    },
  };
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .qrcode{
  }
</style>
