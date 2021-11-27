function add(a, b) {
  if (b === null || b === undefined) {
    return (c) => a + c;
  }

  return a + b;
}
console.log(add(2, 0));
console.log(add(2)(0));
