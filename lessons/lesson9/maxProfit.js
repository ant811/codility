function solution(A) {
  const minimums = [A[0]];
  let maximums = [A[A.length - 1]];
  for (let i = 1; i < A.length; i++) {
    minimums[i] = Math.min(A[i], minimums[i - 1]);
    maximums[i] = Math.max(A[A.length - 1 - i], maximums[i - 1]);
  }
  
  maximums = maximums.reverse();
  let max = 0;
  for (let i = 0; i < minimums.length; i++) {
    if (maximums[i] - minimums[i] > max) {
      max =  maximums[i] - minimums[i];
    }
  }
  
  return max;
}

// Time complexity: O(n)

module.exports = { solution };
