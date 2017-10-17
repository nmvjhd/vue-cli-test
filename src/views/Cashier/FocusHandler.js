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
    this.oldFocusId = null;
  }

  start(initFocusId) {
    if (initFocusId) {
      this.focus(initFocusId);
    }
    this.keyHandler = (e) => {
      const curFocusId = this.$el.querySelector('.focus').getAttribute('focus-id');
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
    if (this.oldFocusId) {
      const $oldEl = this.focusObjMap[this.oldFocusId];
      $oldEl.classList.remove('focus');
    }
    const $newEl = this.focusObjMap[id];
    $newEl.classList.add('focus');
    this.oldFocusId = id;
  }
}
