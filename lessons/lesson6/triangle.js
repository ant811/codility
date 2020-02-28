function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  A.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < A.length - 2; i++) {
    if(
      (A[i] + A[i + 1] > A[i + 2]) &&
      (A[i + 1] + A[i + 2] > A[i]) &&
      (A[i + 2] + A[i] > A[i + 1])
      ) {
        return 1;
      }
  }

  return 0;
}

// Time complexity: O(n * log(n))

module.exports = { solution };
