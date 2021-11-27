function debounce(cb, wait = 500) {
  let timer;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(cb, wait);
  };
}

function throttle(cb, wait = 500) {
  let flag = false;

  return () => {
    if (flag) return;

    flag = true;
    setTimeout(() => {
      cb();
      flag = false;
    }, wait);
  };
}
