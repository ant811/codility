function solution(N) {
  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      let perimeter = (2 * i) + (2 * N/i);
      if (perimeter < min) {
        min = perimeter;
      }
    }  
  }
  return min;
}

// Time complexity: O(sqrt(n))

module.exports = { solution };
