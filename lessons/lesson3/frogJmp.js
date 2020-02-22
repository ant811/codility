function solution(X, Y, D) {
  let result = Math.ceil((Y-X)/D);
  return result;
}

// Time complexity: O(1)

module.exports = { solution }; 
