const { solution } = require('./maxNonoverlappingSegments');

test('Greedy algorithm returns maximal number of non-overlapping segments (each segment begins at A[i] and ends at B[i])', () => {
  expect(solution([], [])).toEqual(0);
  expect(solution([0], [0])).toEqual(1);
  expect(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])).toEqual(3);
  expect(solution([0, 1, 5, 5, 7, 8, 12, 15], [1, 2, 5, 7, 8, 15, 19])).toEqual(4);
  expect(solution([0, 2, 4, 6, 8, 10, 12, 16, 18, 20], [3, 9, 10, 15, 16, 25, 26, 27, 28, 29])).toEqual(3);
  expect(solution([0, 2, 4, 6, 8, 10, 12, 16, 18, 20], [10, 15, 20, 21, 22, 25, 26, 27, 28, 35])).toEqual(2);
});
