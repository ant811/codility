function solution(S, P, Q) {
    const result = [];
    for (let i = 0; i < P.length; i++) {
      let slice = S.slice(P[i], Q[i] + 1);
      if (slice.includes('A')) {
        result.push(1);
      } else if (slice.includes('C')) {
        result.push(2);
      } else if (slice.includes('G')) {
        result.push(3);
      } else {
        result.push(4);
      }
    }
  
    return result;
  }
  
  // Time complexity: O(n + m)
  
  module.exports = { solution };
  