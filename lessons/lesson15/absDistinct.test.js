const { solution } = require('./absDistinct');

test('Returns distinct number of absolute values', () => {
  expect(solution([-5, -3, -1, 0, 3, 6])).toEqual(5);
  expect(solution([])).toEqual(0);
  expect(solution([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])).toEqual(5);
});
