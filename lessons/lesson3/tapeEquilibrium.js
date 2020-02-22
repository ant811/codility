function solution(A) {
  const differences = [];
  let totalSum = A.reduce((acc, element) => {
    return acc + element;
  });
  
  let sum1 = 0;
  let sum2 = totalSum;
  for (let i = 0; i < A.length - 1; i++) {
    sum1+=A[i];
    sum2-=A[i];
    differences.push(Math.abs(sum1 - sum2));
  }
  
  return differences.reduce((acc, element) => {
    return element < acc ? element : acc;
  }, Infinity);
}

// Time complexity: O(n)

module.exports = { solution };
