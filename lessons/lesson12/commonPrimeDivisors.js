function eucGcdDiv(a, b) {
  if(a % b === 0) {
    return b;
  } else {
    return eucGcdDiv(b, a % b);
  }
}

function solution(A, B) {
  let counts = 0;
  for (let i = 0; i < A.length; i++) {
    let numA = A[i];
    let numB = B[i];
    let gcd = eucGcdDiv(numA, numB);
    let aTest = gcd;
    while (aTest !== 1) {
      numA/=aTest;
      aTest = eucGcdDiv(numA, gcd);
    }
    
    let bTest = gcd;
    while (bTest !== 1) {
      numB/=bTest;
      bTest = eucGcdDiv(numB, gcd);
    }

    if(numA === 1 && numB === 1) {
      counts++;
    }
  }
  
  return counts;
}

// Time complexity: O(z*log(max(a) + max(a))*2)

module.exports = { solution };
