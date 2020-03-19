function solution(A) {  
  const maximums = [];
  maximums[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    let checkMax = maximums[i - 1] + A[i];
      for (let dice = 1; dice <=6; dice++){
        // Only check values in earlier squares, in reverse order, when updating max possible value per square
        if (i - dice >= 0) {
          checkMax = maximums[i - dice] + A[i] > checkMax ? maximums[i - dice] + A[i]: checkMax;
        }
      }
  
      maximums.push(checkMax);
  }
  
  let result = maximums.pop();
  return result;
}

// Time complexity: O(n)

module.exports = { solution };
