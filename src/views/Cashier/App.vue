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
    methods: {
      addFocusHandler() {
        const focusItems = Array.from(this.$el.querySelectorAll('[focus-id]'));
        const focusObj = focusItems.reduce((preResult, newItem) => {
          const itemId = newItem.getAttribute('focus-id');
          return {
            ...preResult,
            [itemId]: newItem,
          };
        }, {});
        console.log(focusObj);  // eslint-disable-line
      },
    },
    async created() {
      this.items = await getBundleList();
      this.curBundle = this.items[0];
      this.curQRUrl = this.items[0].url;

      // TODO: add focus logic
      this.$nextTick(function () {
        this.addFocusHandler();
      });
    },
  };
</script>

<style  lang="less" rel="stylesheet/less" scoped>
  .cashier-app{

    .bundles {
      width: 300px;
      display: inline-block;
    }

    .detail{
      width: 300px;
      display: inline-block;
    }

    .qrcode{
      width: 300px;
      display: inline-block;
    }
  }

  .focus{
    background: #dcdb78;
    transform: scale(1.1);
  }
</style>
