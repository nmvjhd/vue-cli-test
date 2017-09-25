/**
 * Created by Administrator on 2017/9/25.
 */

export function getTodoList() {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: '张三',
          state: 1,
        },
        {
          id: 2,
          name: '李四',
          state: 1,
        },
      ]);
    }, 1000);
  });
}

export function getTodoList2() {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: '张三',
          state: 1,
        },
        {
          id: 2,
          name: '李四',
          state: 1,
        },
      ]);
    }, 1000);
  });
}
