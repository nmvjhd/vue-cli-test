/**
 * Created by matengfei on 2017/11/2.
 */
// export function animate($el, prop, delta, time, callback) {
//   let fromValue = parseInt(getComputedStyle($el, null)[prop], 10);
//   const toValue = fromValue + delta;
//   const step = 40;
//   const perDelta = delta / (time / step);
//   const timer = setInterval(() => {
//     fromValue += perDelta;
// //      console.log(fromValue);
//     $el.style[prop] = `${fromValue}px`;
//     if (Math.abs(fromValue - toValue) < 1) {
//       clearInterval(timer);
//       callback($el);
//     }
//   }, step);
// }

export function animate($el, prop, delta, msTime, callback) {
  const fromValue = parseInt(getComputedStyle($el, null)[prop], 10);
  let startTime = null;

  requestAnimationFrame(function tick(curTime) {
    if (startTime === null) {
      startTime = curTime;
    }
    if (curTime - startTime >= msTime) {
      callback($el);
      return;
    }
    const perDelta = ((curTime - startTime) / msTime) * delta;
    const newValue = fromValue + perDelta;
    $el.style[prop] = `${newValue}px`;
    requestAnimationFrame(tick);
  });
}

export function prevIdx(curIdx, len) {
  let prevIdx = (curIdx - 1) % len;
  if (prevIdx < 0) {
    prevIdx += len;
  }
  return prevIdx;
}

export function nextIdx(curIdx, len) {
  return (curIdx + 1) % len;
}
