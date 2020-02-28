function solution(S) {
  if (S.length === 0) {
    return 1;
  }
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if(S[i] === '[') {
      stack.push(']');
    } else if(S[i] === '{') {
      stack.push('}');
    } else if(S[i] === '(') {
      stack.push(')');
    } else {
      let check = stack.pop();
      if(check !== S[i]) {
        return 0;
      }
    }
  }

  if(stack.length === 0) {
      return 1;
  } else {
      return 0;
  }
}

// Time complexity: O(n)

module.exports = { solution };
