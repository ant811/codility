function solution(K, A) {
  let currentRope = 0;
  let ropes = 0;
  for (let i = 0; i < A.length; i++) {
    currentRope+=A[i];
    if(currentRope >= K) {
      ropes++;
      currentRope = 0;
    }
  }

  return ropes;
}

// Time complexity: O(n)

module.exports = { solution };
