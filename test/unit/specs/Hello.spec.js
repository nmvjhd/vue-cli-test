import Hello from '@/components/Hello';
import Hello2 from '@/components/Hello2';
import { createList } from '@/views/Cashier/FocusHandler';

import { renderComponentInVDOM, renderComponent } from '../utils/vuetool';
import { logExpect } from '../utils/expecttool';

describe('Hello', () => {
  it('should render correct contents', () => {
    const hello = renderComponentInVDOM(Hello, {
      msg: 'welcome',
    });
    expect(hello.$el.querySelector('.hello h1').textContent).to.equal('welcome');
    expect(hello.$el.querySelector('.hello h2').textContent).to.equal('welcome111');
  });
});

describe('Hello2', () => {
  it('should render correct contents', () => {
    const hello2 = renderComponent(Hello2, {
      msg: 'welcome',
    });
    expect(hello2.test()).to.equal('welcome111');
    expect(hello2.$el.querySelector('.hello2 h1').textContent).to.equal('welcome');
    expect(hello2.$el.querySelector('.hello2 h2').textContent).to.equal('welcome111');
  });
});

describe('Cashier', () => {
  describe('Utils', () => {
    it('should return corrent keyMap', () => {
      logExpect('resList', createList(7, 2)).to.deep.equal({
        '1_1': [null, '2_1', null, '1_2'],
        '1_2': [null, '2_2', '1_1', null],
        '2_1': ['1_1', '3_1', null, '2_2'],
        '2_2': ['1_2', '3_2', '2_1', null],
        '3_1': ['2_1', '4_1', null, '3_2'],
        '3_2': ['2_2', null, '3_1', null],
        '4_1': ['3_1', null, null, null],
      });

      logExpect('resList2', createList(2, 3)).to.deep.equal({
        '1_1': [null, null, null, '1_2'],
        '1_2': [null, null, '1_1', null],
      });
    });
  });
});

