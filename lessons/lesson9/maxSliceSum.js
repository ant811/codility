function solution(A) {
  if(A.length === 1) {
    return A[0];
  }

  const maxSums = [A[0]];
  for (let i = 1; i < A.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1] + A[i], A[i]);    
  }

  return Math.max(...maxSums);
}

// Time complexity: O(n)

module.exports = { solution };
