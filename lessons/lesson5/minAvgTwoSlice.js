function solution(A) {
  let startIndex = 0;
  let initialSum = A[0] + A[1];
  let average = initialSum / 2;
  
  for (let i = 2; i < A.length; i++) {
    // check three consecutive sequences
    let threeConsecAverage = (A[i - 2] + A[i - 1] + A[i]) / 3;
    
    if (threeConsecAverage < average) {
      average = threeConsecAverage;
      startIndex = i - 2;
    } 
    
    // check clipped (2 consecutive) sequences
    let clippedAverage = (A[i - 1] + A[i]) / 2;
    
    if (clippedAverage < average) {
      average = clippedAverage;
      startIndex = i - 1;
    }
    
  }
  return startIndex;
}

// Time complexity: O(n)

module.exports = { solution };
