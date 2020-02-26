function solution(A) {
  let passing = 0;
  let east = 0;
  for (let i = 0; i < A.length; i++) {
    if(A[i] === 0) {
      east++;
    } else {
      passing+=east;
    }
  }

  if (passing > 1000000000) {
    return -1;
  } else {
    return passing;
  }
}

// Time complexity: O(n)

module.exports = { solution };
