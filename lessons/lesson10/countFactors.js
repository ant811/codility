function solution(N) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if(i === Math.sqrt(N)) {
      factors.push(i);
    } else if (N % i === 0) {
      factors.push(i, N / i);
    }
  }
  return factors.length;
}

// Time complexity: O(sqrt(n))

module.exports = { solution };
