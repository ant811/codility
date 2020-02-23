function solution(A, B, K) {
  if (A % K === 0) {
    return Math.floor(B / K) - Math.floor(A / K) + 1;
  } else {
    return Math.floor(B / K) - Math.floor(A / K); 
  }
}

// Time complexity: O(1)

module.exports = { solution };
