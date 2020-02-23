function solution(A) {
  let arr = A.sort((a, b)=> {
      return a - b;
  });

  if (arr[0] !== 1) {
      return 0;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 !== arr[i + 1]) {
        return 0;
    }
  }

  return 1;
}

// Time complexity: O(N) or O(N * log(N))

module.exports = { solution };
