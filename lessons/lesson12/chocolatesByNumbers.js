function solution(N, M) {
  const eucDiv = (N, M) => {
    if (N % M === 0) {
      return M;
    } else {
      return eucDiv(M, N % M);
    }
  }

  const gcd = eucDiv(N, M);
  return N / gcd;
}

// Time complexity: O(log(n + m))

module.exports = { solution };
