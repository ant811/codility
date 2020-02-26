const { solution } = require('./distinct');

test('Returns number of unique elements in array', ()=> {
  expect(solution([2, 3, 1, 1, 1, 4])).toEqual(4);
  expect(solution([])).toEqual(0);
  expect(solution([2, 5, 4, 5, 3, 2, 5, 6, 3, 1, 7])).toEqual(7);
  expect(solution([7, 4, 1, 2, 6, 3, 2, 8, 9, 2, 6, 2, 1, 10, 5])).toEqual(10);
});
