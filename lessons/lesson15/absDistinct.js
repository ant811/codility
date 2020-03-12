function solution(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    let key = Math.abs(A[i]);
    if (!obj[key]) {
      obj[key] = true;
    }
  }

  return Object.keys(obj).length;
}

// Time complexity: O(n)

module.exports = { solution };
