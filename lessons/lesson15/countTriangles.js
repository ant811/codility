function solution(A) {
    A.sort((a, b) => {
      return a - b;
    });
    
    let count = 0;
    for(let P = 0; P < A.length - 2; P++) {
      let initialQ = P + 1;
      let initialR = P + 2;
      let Q = P + 1;
      let R = P + 2;
      while (R < A.length) {
        while(A[P] + A[Q] > A[R]) {
          count++;
          R++
        } 
          initialQ++;
          initialR++;
          Q = initialQ
          R = initialR
      }
    }
    return count;
    
}

// Current time complexity is O(n^3), and only 72% of tests are passing.
// https://app.codility.com/demo/results/trainingA86WY2-WXH/

// I will continue to work in this to find better time complexity. 