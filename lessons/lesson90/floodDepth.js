function solution(A) {
  if (A.length < 3) {
    return 0;
  }
  
  let floodDepth = 0;
  let maxHeight = A[0];
  let maxDepth = A[0];
  let maxPool = 0;
  let basinStarted = false;
  let closedBasin = false;

  for (let i = 1; i < A.length; i++) {
    let height = A[i];
    if (height >= maxHeight) {
      if (basinStarted) {
        floodDepth = maxHeight - maxDepth > floodDepth ? maxHeight - maxDepth : floodDepth;
        closedBasin = true;
      }
        
      maxHeight = height;
      maxDepth = height;
      maxPool = 0;
    } else if (height < maxHeight) {
      basinStarted = true;
      closedBasin = false;
      if (height < maxDepth) {
        maxDepth = height;
      } else if (height > maxDepth) {
        maxPool = height - maxDepth > maxPool ? height - maxDepth : maxPool;
      }
    }
  }

  if (closedBasin === false) {
    if (maxPool > floodDepth) {
      return maxPool;
    }
  }
  
  return floodDepth;
}

// Time complexity: O(n)

module.exports = { solution };
