import { createVue } from '../utils/util';

describe('Components', () => {
  describe('Carousel', () => {
    it('render carousel correctly', () => {
      const carousel = createVue({
        template: `
              <carousel :imgs="imgs" :size="size" loop></carousel>`,
        data() {
          return {
            imgs: [
              'http://localhost:9999/images/vip-rights-bg1.jpg',
              'http://localhost:9999/images/vip-rights-bg2.jpg',
              'http://localhost:9999/images/vip-rights-bg3.jpg',
              'http://localhost:9999/images/vip-rights-bg4.jpg',
            ],
            size: {
              width: '356px',
              height: '200px',
            },
          };
        },
      }, true);
    });
  });
});
