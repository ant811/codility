function solution(N, A) {
  let currentMax = 0;
  let recordMax = 0;
  let counters = [];
  
  for (let i = 0; i < N; i++) {
    counters.push(0);
  }

  for (let i = 0; i < A.length; i++) {
      if(A[i] === N + 1) {
          recordMax = currentMax;
      } else {
          if(recordMax !== 0 && counters[A[i] - 1] < recordMax) {
            counters[A[i] - 1] = recordMax + 1;
          } else {
            counters[A[i] - 1]++;
          }

          currentMax = counters[A[i] - 1] > currentMax ? counters[A[i] - 1] : currentMax;
      }
  }
  
  for (let i = 0; i < counters.length; i++) {
      if (counters[i] < recordMax) {
          counters[i] = recordMax;
      }
  }
  
  return counters;
}

// Time complexity: O(N + M)

module.exports = { solution };
