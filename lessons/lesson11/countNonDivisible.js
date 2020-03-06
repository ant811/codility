function solution(A) {
  let max = Math.max(...A)
  let numbersCount = new Array(max + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    numbersCount[A[i]]++;
  }
  
  let divisors = new Array(max + 1).fill(0);
  for (let i = 1; i <= max; i++) {
    for (let j = i; j <= max; j+=i) {
      divisors[j] += numbersCount[i];
    }
  }
  
  let result = [];
  for (i = 0; i < A.length; ++i){
    result[i] = A.length - divisors[A[i]];
  }
  
  return result;
}

//Time complexity: O(n * log(n))

module.exports = { solution };