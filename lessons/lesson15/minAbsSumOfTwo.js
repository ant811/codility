function absSum(a, b, arr) {
  return Math.abs(arr[a] + arr[b]);
}

function solution(A) {
  if (A.length === 1) {
    return absSum(0, 0, A);
  }

  A.sort((a, b) => {
    return a - b;
  });
  
  let begin = 0;
  let end = A.length - 1;
  let min = absSum(begin, end, A);

  while (begin < end) {
    let testBegin = begin + 1;
    let testEnd = end - 1;
    let testBeginSum = absSum(testBegin, end, A);
    let testEndSum = absSum(begin, testEnd, A);
    if (testBeginSum < testEndSum) {
      begin++; 
      min = testBeginSum < min ? testBeginSum : min;
    } else {
      end--;
      min = testEndSum < min ? testEndSum : min;
    }
  }

  return min;
}

// Time complexity: O(n * log(n))

module.exports = { solution }; 
