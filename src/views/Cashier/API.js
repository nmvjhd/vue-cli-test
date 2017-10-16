/**
 * Created by matengfei on 2017/10/16.
 */
export function getBundleList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bundles = [
        {
          type: '连续包月',
          price: 30,
          description: '可领一个月爱奇艺黄金会员',
          url: 'http://aaa/bbb/ccc/111',
        },
        {
          type: '年卡',
          price: 359,
          description: '可领12个月爱奇艺黄金会员',
          url: 'http://aaa/bbb/ccc/222',
        },
        {
          type: '季卡',
          price: 120,
          description: '可领3个月爱奇艺黄金会员',
          url: 'http://aaa/bbb/ccc/333',
        },
        {
          type: '月卡',
          price: 49.8,
          description: '可领1个月爱奇艺黄金会员',
          url: 'http://aaa/bbb/ccc/444',
        },
      ];
      resolve(bundles);
    }, 200);
  });
}

export function getCouponList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const coupons = [
        {
          condition: '满50减1',
        },
        {
          condition: '满50减1',
        },
        {
          condition: '满50减1',
        },
        {
          condition: '满50减1',
        },
      ];
      resolve(coupons);
    }, 200);
  });
}
