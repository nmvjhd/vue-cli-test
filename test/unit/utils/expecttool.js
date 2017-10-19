/**
 * Created by matengfei on 2017/10/13.
 */
import { expect } from 'chai';

export function log(type, ...args) {
  console.log(`%c${type}`, 'background:black;color:white', ...args);  // eslint-disable-line
}

export function logExpect(type, obj) {
  log(type, obj);
  return expect(obj);
}

export function isResOK(res) {
  return !!(res.code && res.code === 'A00000' && res.msg && res.msg === '成功' && res.data);
}
