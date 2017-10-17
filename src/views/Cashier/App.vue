<template>
  <div class="cashier-app">
    <bundles :items="items"></bundles>
    <detail :bundle="curBundle"></detail>
    <qrcode :url="curQRUrl"></qrcode>
  </div>
</template>

<script>
  import Bundles from './Bundles';
  import Detail from './Detail';
  import qrcode from './QRCode';
  import { getBundleList } from './API';
  import FocusHandler from './FocusHandler';

  const directionMap = {
    '1_1': [null, '2_1', null, '1_2'],  // 分别是元素上下左右元素的id
    '2_1': ['1_1', '3_1', null, '1_2'],
    '3_1': ['2_1', '4_1', null, '1_2'],
    '4_1': ['3_1', null, null, '1_2'],
    '1_2': [null, null, '1_1', null],
  };
  let focusHandler = null;

  export default{
    name: 'cashier',
    components: {
      Bundles,
      Detail,
      qrcode,
    },
    data: () => ({
      items: [],
      curBundle: {},
      curQRUrl: '',
    }),
    async created() {
      this.items = await getBundleList();
      this.curBundle = this.items[0];
      this.curQRUrl = this.items[0].url;

      // TODO: add focus logic
      this.$nextTick(function next() {
        focusHandler = new FocusHandler(this.$el, directionMap);
        focusHandler.start('1_1');
      });
    },
    beforeDestory() {
      focusHandler.end();
    },
  };
</script>

<style  lang="less" rel="stylesheet/less">
  .cashier-app{
    display: flex;

    .bundles {
      width: 300px;
    }

    .detail{
      flex: 1;
    }

    .qrcode{
      width: 300px;
    }
  }

  .focus{
    background: #dcdb78;
    transform: scale(1.1);
  }
</style>
