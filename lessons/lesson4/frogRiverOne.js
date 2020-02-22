function solution(X, A) {
  let arraySum = 0;
  for (let i = 1; i <= X; i++) {
    arraySum+=i;
  }

  let foundSum = 0;
  const leaf = {};
  let second;
  
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
        if(!leaf[A[i]]) {
            leaf[A[i]] = true;
            foundSum+=A[i];
        }

        if(foundSum === arraySum) {
            second = i;
            break;
        }
    }
  }

  if(second) {
      return second;
  } else {
      return -1;
  }
}

// Time complexity: O(n)

module.exports = { solution };
