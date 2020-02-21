function solution(A) {
  const occurrences = {};
  for (let i = 0; i < A.length; i++) {
    occurrences[A[i]] = occurrences[A[i]] + 1 || 1;
  }
  for (let key in occurrences) {
    if (occurrences[key] % 2 === 1) {
      return parseInt(key);
    }
  }
}

module.exports = { solution };
