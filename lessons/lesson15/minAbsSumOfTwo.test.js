const { solution } = require('./minAbsSumOfTwo');

test('Returns lowest possible absolute sum of any two numbers in array', () => {
  expect(solution([-8, 4, 5, -10, 3])).toEqual(3);
  expect(solution([1, 4, -3])).toEqual(1);
  expect(solution([-8])).toEqual(16);
  expect(solution([5, 2, -4, 7, 9, 1, -2, 4])).toEqual(0);
});
