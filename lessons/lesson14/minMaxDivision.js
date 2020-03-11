function solution(K, M, A) {
  let min = Math.max(...A);
  let max = A.reduce((a, b) => {
    return a + b;
  });

  while (min <= max) { 
    if(min === max) {
      break;
    }

    let midPoint = Math.floor((min + max) / 2);
    let sum = 0;
    let sectionCounter = 1;
    for (let i = 0; i < A.length; i++) {
      if (sum + A[i] > midPoint) {
        sum = A[i];
        sectionCounter++;
      } else {
        sum+=A[i];
      }
    }
    
    if (sectionCounter > K) {
      min = midPoint + 1; 
    } else {
      max = midPoint;
    }
  }
  
  return min;
}

// Time complexity: O(n * log(n+m))

module.exports = { solution };
