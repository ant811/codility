function solution(A, K) {
  if (A.length === 0) {
    return [];
  }
  
  const arr = A.slice();
  for (let i = 0; i < K; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
}

module.exports = { solution };
