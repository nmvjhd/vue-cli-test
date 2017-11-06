/**
* Created by matengfei on 2017/10/26.
*/

<template>
  <div :class="prefixCls" :style="size">
    <div :class="[prefixCls + '-list']">
      <div :style="{width:'9999px','marginLeft': -parseInt(size.width,10) + 'px'}">
        <ul>
          <li><img :src="url1" :style="{height: size.height,width: size.width}"></li>
          <li><img :src="url2" :style="{height: size.height,width: size.width}"></li>
          <li><img :src="url3" :style="{height: size.height,width: size.width}"></li>
        </ul>
      </div>
    </div>
    <ol :class="[prefixCls + '-dots']">
      <template v-for="n in imgs.length">
        <li :class="[n - 1 === curIdx ? prefixCls + '-dot-active' : prefixCls + '-dot']">
          <span class="dot"></span>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
  import { animate, prevIdx, nextIdx } from './util';

  const prefixCls = 'webtv-carousel';
  const log = console.log.bind(null, '[components-carousel:]');

  export default {
    name: 'Carousel',
    data() {
      return {
        prefixCls,
        curIdx: 0,
        isSlide: false,
        url1: '',
        url2: '',
        url3: '',
      };
    },
    props: {
      size: {
        type: Object,
        required: true,
        validater(value) {
          return value.width && value.height;
        },
      },
      imgs: {
        type: Array,
        required: true,
      },
      loop: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      next() {
        if (this.isSlide) {
          return;
        }
        if (!this.loop && this.curIdx === this.imgs.length - 1) {
          return;
        }

        this.isSlide = true;
        if (this.$parent) {
          this.$parent.$emit('carousel.slideStart', nextIdx(this.curIdx, this.imgs.length || 0), this.curIdx);
        }
        log('next called');
        const $ul = this.$el.querySelector('ul');
        const firstLi = $ul.firstElementChild;
        const width = parseInt(this.size.width, 10);
        animate(firstLi, 'marginLeft', -width, 600, () => {
          this.isSlide = false;
          const oldIdx = this.curIdx;
          this.curIdx = nextIdx(this.curIdx, this.imgs.length || 0);
          const newIdx = nextIdx(this.curIdx, this.imgs.length || 0);
          if (this.$parent) {
            this.$parent.$emit('carousel.slideEnd', this.curIdx, oldIdx);
          }
          firstLi.querySelector('img').setAttribute('src', this.imgs[newIdx]);
          firstLi.style.marginLeft = 'auto';
          $ul.appendChild(firstLi);
        });
      },
      prev() {
        if (this.isSlide) {
          return;
        }
        if (!this.loop && this.curIdx === 0) {
          return;
        }
        this.isSlide = true;
        if (this.$parent) {
          this.$parent.$emit('carousel.slideStart', prevIdx(this.curIdx, this.imgs.length || 0), this.curIdx);
        }
        log('prev called');
        const $ul = this.$el.querySelector('ul');
        const firstLi = $ul.firstElementChild;
        const lastLi = $ul.lastElementChild;
        const width = parseInt(this.size.width, 10);
        $ul.insertBefore(lastLi, firstLi);
        lastLi.style.marginLeft = `${-width}px`;
        animate(lastLi, 'marginLeft', parseInt(this.size.width, 10), 600, () => {
          this.isSlide = false;
          const oldIdx = this.curIdx;
          this.curIdx = prevIdx(this.curIdx, this.imgs.length || 0);
          if (this.$parent) {
            this.$parent.$emit('carousel.slideEnd', this.curIdx, oldIdx);
          }
          const newIdx = prevIdx(this.curIdx, this.imgs.length || 0);
          lastLi.querySelector('img').setAttribute('src', this.imgs[newIdx]);
        });
      },
      handleKeyDown(e) {
        const code = e.keyCode;
        const keyCode = {
          LEFT: 37,
          RIGHT: 39,
        };
        switch (code) {
          case keyCode.LEFT:
            this.prev();
            break;
          case keyCode.RIGHT:
            this.next();
            break;
          default:
            break;
        }
      },
      updateImgs() {
        this.url1 = this.imgs[prevIdx(this.curIdx, this.imgs.length || 0)];
        this.url2 = this.imgs[this.curIdx];
        this.url3 = this.imgs[nextIdx(this.curIdx, this.imgs.length || 0)];
      },
//      slide(isPositive) {
//      },
    },
    mounted() {
      document.addEventListener('keydown', this.handleKeyDown);
      this.updateImgs();
    },
    beforeDestory() {
      document.removeEventListener('keydown', this.handleKeyDown);
    },
  };

</script>

<style lang="less" rel="stylesheet/less">
  @carousel-prefix-cls: ~"webtv-carousel";

  .@{carousel-prefix-cls} {
    position: relative;
    /*border: solid 1px white;*/
    overflow: hidden;

    &-list {
      li{
        float:left;
        list-style: none;
      }
    }

    &-dots {
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translate(-50%,-50%);
      font-size: 20px;

      li{
        list-style: none;
        display: inline-block;
        width: 55px;

        .dot{
          /*color:white;*/
        }
      }
    }

    &-dot{
      width: 18px;
      height: 18px;
      background: url('../../assets/image/vip-rights-dot.png') no-repeat center;
    }

    &-dot-active{
      /*transform: scale(2);*/
      width: 55px;
      height: 18px;
      background: url('../../assets/image/vip-rights-dot-act.png') no-repeat center;
    }
  }
</style>
