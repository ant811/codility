function solution(S) {
  let stack = [];
  if(S.length === 0) {
    return 1;
  }
  
  for (let i = 0; i < S.length; i++) {
    if(S[i] === '(') {
      stack.push(')');
    } else {
      let check = stack.pop();
      if(check !== ')') {
        return 0;
      }
    }
  }
  
  if(stack.length !== 0) {
    return 0;
  } else {
    return 1;
  }
}

// Time complexity: O(n)

module.exports = { solution };
