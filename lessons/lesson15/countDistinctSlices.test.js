const { solution } = require('./countDistinctSlices');

test('Returns number of possible array slices without duplicate integers', () => {
  expect(solution(6, [3, 4, 5, 5, 2])).toEqual(9);
  expect(solution(4, [1, 2, 3, 2, 1, 2, 3])).toEqual(16);
  expect(solution(12500, [1, 2, 3, 4, 5, 12, 13, 14, 15, 34, 25, 2, 3, 45, 78, 76, 432, 12343, 123, 543, 2, 67, 89, 76, 45, 46, 47, 48, 49, 50, 12])).toEqual(306);
  expect(solution(3, [1])).toEqual(1);
  expect(solution(6, [1, 3, 5, 7, 9, 2, 4, 6, 8, 3, 8, 2, 4, 6, 8])).toEqual(71);
  expect(solution(100000, [1, 1])).toEqual(2);
});
