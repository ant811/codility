function solution(A) {
  A = A.sort((a, b) => {
    return a - b;
  });
  
  let counter = 0;
  for (let P = 0; P < A.length - 2; P++) {
    let R = P + 2;
    for (let Q = P + 1; Q < A.length - 1; Q++) {
      while(R < A.length && A[P] + A[Q] > A[R]) {
        R++;
      }
      counter+= R - Q - 1;
    }    
  }
  
  return counter;
}

// Time complexity: O(n^2)

module.exports = { solution };
