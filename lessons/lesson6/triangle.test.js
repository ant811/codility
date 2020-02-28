const { solution } = require('./triangle');

// Brief:
  // Array A contains N integers
  // A triplet (P, Q, R) is triangular when the following conditions are met:
    // 0 ≤ P < Q < R < N
    // A[P] + A[Q] > A[R]
    // A[Q] + A[R] > A[P]
    // A[R] + A[P] > A[Q]

test('Returns 1 when an array contains a triplet that is triangular (as per the brief), else 0', ()=> {
  expect(solution([10, 2, 5, 1, 8, 20])).toEqual(1);
  expect(solution([10, 50, 5, 1])).toEqual(0);
  expect(solution([])).toEqual(0);
  expect(solution([1, 2])).toEqual(0);
});
