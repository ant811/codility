function solution(A) {
  if (A.length <= 2) {
    return 0;
  }
  
  let peaks = 0;
  let peakIndices = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peakIndices.push(i);
      peaks++;
    }
  }

  if(peaks <= 2) {
    return peaks;
  }

  let maxFound = 0;
  let maxPossFlags = Math.floor(Math.sqrt(peakIndices[peaks - 1] - peakIndices[0])) + 1;
  for (let i = maxPossFlags; i > 2; i--) {
    let counts = 1;
    let peak = peakIndices[0];
    for (let j = 1; j < peakIndices.length; j++ ) {
      if (peak + i <= peakIndices[j]) {
        counts++;
        peak = peakIndices[j];
      }
      
      if (counts === i) {
        break;
      }
    }
    
    if (counts > maxFound) {
      maxFound = counts;
    }
  }

  return maxFound;
}

// Time complexity: O(n)

module.exports = { solution };
