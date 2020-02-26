function solution(A) {
  if(A.length === 0) {
    return 0;
  }
  let arr = A.sort();
  let result = 1;
  for (let i = 1; i < arr.length; i++) {
    if(arr[i - 1] !== arr[i]) {
      result++;
    }
  }
  return result;
}

// Time complexity: O(n*log(n)), or O(n)

module.exports = { solution };
