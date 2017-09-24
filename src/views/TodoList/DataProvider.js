/**
 * Created by matengfei on 2017/9/22.
 */

class TodoList {
  constructor() {
    this.items = [
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
    ];

    this.curMaxId = 2;
  }
  get() {
    return this.items;
  }
  add(name) {
    const newId = this.genNewId();
    this.items.push({
      id: newId,
      name,
      state: 1,
    });
    return this.get();
  }
  del(id) {
    this.items = this.items.filter(item => item.id !== id);
    return this.get();
  }

  genNewId() {
    const newId = this.curMaxId + 1;
    this.curMaxId += 1;
    return newId;
  }
}

export default TodoList;
