// O(K * N)
const A = [1, 2, 3, 4, 5, 6];
function cal1(k) {
  for (let query of k) {
    let total = 0;
    for (let start = query.i; start <= query.j; start++) {
      total += A[start];
    }
    console.log(total);
  }
}
cal1([{ i: 2, j: 3 }]);

// O(N + K)
const A = [1, 2, 3, 4, 5, 6];
function cal2(k) {
  const sumList = [];
  for (let i = 0; i < A.length; i++) {
    sumList.push((sumList[i - 1] || 0) + A[i]);
  }

  for (const query of k) {
    console.log(sumList[query.j] - sumList[query.i] + A[query.i]);
  }
}
cal2([{ i: 1, j: 2 }]);
