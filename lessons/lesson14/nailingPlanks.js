function solution(A, B, C) {
  let start = 0;
  let end = C.length;
  let maxPlankPosition = Math.max(...B);
  let found = false;
  while (start <= end) { 
    let midPoint = Math.floor( (start + end) / 2);
    let nailSieve = new Array(maxPlankPosition + 1).fill(0);
    for (let i = 0; i < midPoint; i++) {
      nailSieve[C[i]] = 1;
    }
    
    for (let i = 1; i < nailSieve.length; i++) {
      nailSieve[i]+=nailSieve[i - 1];
    }

    let allPlanksNailed = true;
    for (let i = 0; i < A.length; i++) {
      if (nailSieve[A[i] - 1] === nailSieve[B[i]]) {
        allPlanksNailed = false;
        break;
      }
    }
    
    if(allPlanksNailed) {
      found = true;
      if(end === midPoint) {
        break;
      }
      end = midPoint;
    } else {
      start = midPoint + 1;
    }
  }

  if(found) {
    return start;
  } else {
    return -1;
  }
}

// Time complexity: O((n + m) * log(n))

module.exports = { solution };
