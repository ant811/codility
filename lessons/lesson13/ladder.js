const fibFinder = (n, maxFactor) => {
  const result = [1, 2];
  for (let i = 2; i < n; i++) {
    result.push((result[i - 2] + result[i - 1]) % Math.pow(2, maxFactor));
  }
  return result;
}

function solution(A, B) {
  const result = [];
  let maxValue = Math.max(...A);
  let maxFactor = Math.max(...B);
  const fibs = fibFinder(maxValue, maxFactor);
  for (let i = 0; i < A.length; i++) {
    result.push((fibs[A[i] - 1]) % Math.pow(2, B[i]));
  }

  return result;
}

// Time complexity: O(L)
// I.e., the time complexity is linear.  In the official Codility brief, L is the length of arrays A and B

module.exports = { solution };
