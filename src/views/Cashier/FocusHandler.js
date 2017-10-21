/**
 * Created by matengfei on 2017/10/17.
 */
import { KEYBOARD } from './constant';

function buildFocusObjMap($el) {
  const focusItems = Array.from($el.querySelectorAll('[focus-id]'));
  const focusObjMap = focusItems.reduce((preResult, newItem) => {
    const itemId = newItem.getAttribute('focus-id');
    return {
      ...preResult,
      [itemId]: newItem,
    };
  }, {});
  return focusObjMap;
}

export default class FocusManager {
  constructor($el, directionMap) {
    this.$el = $el;
    this.focusObjMap = buildFocusObjMap($el);
    this.directionMap = directionMap;
    this.curFocusId = null;
  }

  start(initFocusId) {
    if (initFocusId) {
      this.focus(initFocusId);
    }
    this.keyHandler = (e) => {
      const curFocusId = this.curFocusId || this.$el.querySelector('.focus').getAttribute('focus-id');
      const key = e.keyCode;
      let newFocusId = null;
      switch (key) {
        case KEYBOARD.ENTER:
          console.log(`enter ${curFocusId}`); // eslint-disable-line
          break;
        case KEYBOARD.UP:
          newFocusId = this.directionMap[curFocusId][0];
          break;
        case KEYBOARD.DOWN:
          newFocusId = this.directionMap[curFocusId][1];
          break;
        case KEYBOARD.LEFT:
          newFocusId = this.directionMap[curFocusId][2];
          break;
        case KEYBOARD.RIGHT:
          newFocusId = this.directionMap[curFocusId][3];
          if (newFocusId !== null) {
            this.directionMap[newFocusId][2] = curFocusId; // eslint-disable-line
          }
          break;
        default:
          break;
      }
      if (newFocusId !== null) {
        this.focus(newFocusId);
      }
    };
    document.addEventListener('keydown', this.keyHandler);
  }

  end() {
    document.removeEventListener('keydown', this.keyHandler);
  }

  focus(id) {
    if (this.curFocusId) {
      const $oldEl = this.focusObjMap[this.curFocusId];
      $oldEl.classList.remove('focus');
    }
    const $newEl = this.focusObjMap[id];
    $newEl.classList.add('focus');
    this.curFocusId = id;
  }
}

export function createList(total, numPerLine) {
  const list = {};
  const totalRow = Math.ceil(total / numPerLine);
  const totalCol = numPerLine;
  for (let i = 0; i < total; i += 1) {
    const curRow = Math.floor(i / numPerLine) + 1;
    const curCol = (i % numPerLine) + 1;
    const curId = `${curRow}_${curCol}`;
    const upRow = curRow - 1 > 0 ? curRow - 1 : null;
    // const downRow = (curRow + 1 <= totalRow) ? curRow + 1 : null;
    const downIdx = i + 1 + numPerLine;
    const downRow = ((curRow + 1 <= totalRow) && (downIdx <= total)) ? curRow + 1 : null;
    const leftCol = curCol - 1 > 0 ? curCol - 1 : null;
    // const rightCol = (curCol + 1 <= totalCol) ? curCol + 1 : null;
    const rightIdx = i + 2;
    const rightCol = ((curCol + 1 <= totalCol) && (rightIdx <= total)) ? curCol + 1 : null;
    const upId = upRow === null ? null : `${upRow}_${curCol}`;
    const downId = downRow === null ? null : `${downRow}_${curCol}`;
    const leftId = leftCol === null ? null : `${curRow}_${leftCol}`;
    const rightId = rightCol === null ? null : `${curRow}_${rightCol}`;
    list[curId] = [upId, downId, leftId, rightId];
  }
  return list;
}

// export function createKeyMap(total, numPerLine) {
//   const _keyMap = {};
//   const totalRow = Math.ceil(total / numPerLine);
//   const totalCol = numPerLine;
//   for (let i = 0; i < total; i += 1) {
//     const curRow = Math.floor(i / numPerLine) + 1;
//     const curCol = (i % numPerLine) + 1;
//     const upRow = curRow - 1 > 0 ? curRow - 1 : null;
//     // const downRow = (curRow + 1 <= totalRow) ? curRow + 1 : null;
//     const downIdx = i + 1 + numPerLine;
//     const downRow = ((curRow + 1 <= totalRow) && (downIdx <= total)) ? curRow + 1 : null;
//     const leftCol = curCol - 1 > 0 ? curCol - 1 : null;
//     // const rightCol = (curCol + 1 <= totalCol) ? curCol + 1 : null;
//     const rightIdx = i + 2;
//     const rightCol = ((curCol + 1 <= totalCol) && (rightIdx <= total)) ? curCol + 1 : null;
//     const curId = `${curRow}_${curCol}`;
//     const upId = upRow === null ? null : `${upRow}_${curCol}`;
//     const downId = downRow === null ? null : `${downRow}_${curCol}`;
//     const leftId = leftCol === null ? null : `${curRow}_${leftCol}`;
//     const rightId = rightCol === null ? null : `${curRow}_${rightCol}`;
//     _keyMap[curId] = [upId, downId, leftId, rightId];
//   }
//
//   const KeyMap = {
//     use(rule) {
//       rule(total, numPerLine, _keyMap);
//       return KeyMap;
//     },
//   };
//
//   return KeyMap;
// }

function rightRightDownRule(total, numPerLine, keyMap) {
  const newKeyMap = Object.assign({}, keyMap);
  for (let i = 0; i < total; i += 1) {
    const curRow = Math.floor(i / numPerLine) + 1;
    const curCol = (i % numPerLine) + 1;
    const curId = `${curRow}_${curCol}`;
    if (curCol === numPerLine) {
      const nextId = `${curRow + 1}_1`;
      if ((curRow * numPerLine) + 1 <= total) { // nextId exist
        newKeyMap[curId][3] = nextId;
      }
    }
  }
  return newKeyMap;
}

function lastLineDownLeftRule(total, numPerLine, keyMap) {
  const newKeyMap = Object.assign({}, keyMap);
  const lastId = `${Math.floor(total / numPerLine) + 1}_${total % numPerLine}`;
  for (let i = 0; i < total; i += 1) {
    const curRow = Math.floor(i / numPerLine) + 1;
    const curCol = (i % numPerLine) + 1;
    const curId = `${curRow}_${curCol}`;
    if (curCol === numPerLine) {
      if ((curRow * numPerLine) + curCol > total) { // downId not exist
        newKeyMap[curId][1] = lastId;
      }
    }
  }
  return newKeyMap;
}

rightRightDownRule(7, 2, createList(7, 2));

lastLineDownLeftRule(7, 2, createList(7, 2));
