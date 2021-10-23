function api(num) {
  return new Promise((res, rej) => {
    if (num > 5) {
      res('ok');
    } else {
      rej('get out');
    }
  });
}

async function call() {
  const data = await api(6).catch((e) => console.log(e));

  console.log({ data });
}

call();
