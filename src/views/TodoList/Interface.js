/**
 * Created by Administrator on 2017/9/25.
 */
import $ from 'jquery';

export function getTodoList() {
  return new Promise((resolve, reject) => {
    const url = 'https://api.github.com/repos/holoto/color-scheme/subscribers';
    return $.get(url);
  });
}

export function list2() {
  // TODO:
}
