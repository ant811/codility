function solution(A) {
  if (A.length === 0) {
    return 1;
  }

  let sortedArr = A.sort((a, b)=> {
      return a - b;
  });

  for (let i = 0; i < sortedArr.length; i++) {
    if(sortedArr[i] !== i + 1) {
      return sortedArr[i] - 1;
    }
  } 

  if(sortedArr[0] !== 1) {
    return 1;
  } else {
    return sortedArr.length + 1;
  }
}

// Time Complexity: O(N) or O(N * log(N))

module.exports = { solution };
