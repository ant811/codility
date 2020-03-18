function solution(A, B) {
  if(A.length < 2) {
    return A.length;
  }

  let end = B[0];
  let segments = 1;
  
  for (let i = 1; i < A.length; i++) {
    if (A[i] > end) {
      end = B[i];
      segments++;
    }
  }
  
  return segments;
}

// Time complexity: O(n)

module.exports = { solution };
