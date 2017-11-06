// rigister components,so we can use component directly
import Vue from 'vue';
import Carousel from '@/components/carousel';

const components = {
  Carousel,
};

export default function install() {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
}

install();
