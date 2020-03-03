function solution(A) {
  if(A.length === 3) {
    return 0;
  }
  
  let leftSums = [];
  let rightSums = [];
  
  for (let i = 0; i < A.length - 1; i++) {
    if (i === 0) {
      leftSums[i] = 0;
      rightSums[i] = Math.max(A[A.length - 2], 0);
    } else {
      leftSums[i] = Math.max(leftSums[i - 1] + A[i], A[i], 0);
      if(i !== A.length - 2) {
        rightSums[i] = Math.max(rightSums[i - 1] + A[A.length -i - 2], A[A.length -i - 2], 0);
      }
    }
  }

  leftSums = [0].concat(leftSums);
  rightSums = [0, 0].concat(rightSums);
  rightsSums = rightSums.reverse();
  let max = 0;
  for (let i = 1; i < rightSums.length - 1; i++) {
    if(rightSums[i] + leftSums[i] > max) {
      max = rightSums[i] + leftSums[i];
    }
  }

  return max;
}

// Time complexity: O(n)

module.exports = { solution };
