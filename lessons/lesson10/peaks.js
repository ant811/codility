function solution(A) {
  if (A.length <= 2) {
    return 0;
  }

  let peaks = 0;
  const peakIndeces = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks++;
      peakIndeces.push(i);
    }
  }
  
  if (peaks <= 1) {
    return peaks;
  }
  
  const factors = [];
  for (let i = 1; i <= Math.sqrt(A.length); i++) {
    if (A.length % i === 0) {
      factors.push([i, A.length / i], [A.length / i, i])
    }
  }
  
  let max = 1;
  for (let i = 1; i < factors.length; i++) {
    let peakCheck = 0;
    let currentPeak;
    let counts = 0;
    let factor = 0;
    let stop = false;
    while (stop === false) {
      currentPeak = peakIndeces[peakCheck];
      if (
          (currentPeak >= (factors[i][1] * factor)) &&
          (currentPeak < (factors[i][1] * (factor + 1)))
         ) {
        factor++;
        counts++;
      }

      peakCheck++;
      if (peakCheck === peaks) {
        stop = true;
      }
      
      if (counts === factors[i][0]) {
        stop = true;
      }
    }
    
    if (counts === factors[i][0] && counts > max) {
      max = counts;
    }
  }
  
  return max;
}

// Time complexity: O(n * log(log(n)))

module.exports = { solution};
