function solution(M, A) {
  if(A.length < 1) {
    return A.length;
  }

  let begin = 0;
  let cache = 0;
  let total = 0;
  let tracker = {};
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    if(tracker[num] === undefined || tracker[num] < begin) {
      tracker[num] = i;
      cache++;
      total+=cache;
      if(total > 1000000000) {
        return 1000000000;
      }
    } else {
      let offset = tracker[num] - begin + 1;
      cache-=offset;
      cache++;
      total+=cache;
      if(total > 1000000000) {
        return 1000000000;
      }

      begin = tracker[num] + 1;
      tracker[num] = i;
    }
  }

  if(total > 1000000000) {
    return 1000000000;
  } else {
   return total;
  }
}

// Time complexity: O(n)

module.exports = { solution };
