const fibFinder = (n) => {
  const result = [0, 1];
  let i = 2;
  while(result[result.length - 1] < (n + 1)) {
    result.push(result[i - 2] + result[i - 1]);
    i++;
  }
  
  result.pop();
  return result;
}

function solution(A) {
  if(A.length < 3) {
    return 1;
  }
  const fibs = fibFinder(A.length + 1);
  A.push(1);
  const fibSieve = new Array(A.length + 1).fill(false);
  for (let i = 0; i < fibs.length; i++) {
    fibSieve[fibs[i]] = true;
  }
  const leaves = {};
  const minJumps = new Array(A.length).fill(0);
  for (let i = 0; i < A.length; i++) {
    if(A[i] === 1) {
      if(fibSieve[i + 1]) {
        leaves[i + 1] = 1;
      } else {
        let leafJump;
        for (let j = fibs.length; j>=0; j--) {
          if(fibs[j] <= (i + 1)) {
            if(leaves[(i + 1) - fibs[j]]) {
              if(!leafJump) {
                leafJump = leaves[(i + 1) - fibs[j]];
              } else {
                leafJump = leaves[(i + 1) - fibs[j]] < leafJump ? leaves[(i + 1) - fibs[j]] : leafJump;
              }
            }
          }
        }
        
        if(leafJump) {
          leaves[i + 1] = leafJump + 1;
        }
      }
    }
  }

  for (let key in leaves) {
    minJumps[parseInt(key) - 1] = leaves[key];
  }

  let result = minJumps.pop();
  if(result === 0) {
    return -1;
  } else {
    return result;
  }
}

// Time complexity: O(n * log(n))

module.exports = { solution };
