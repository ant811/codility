const { solution } = require('./dominator');

test('Returns an index that contains an element that appears in more than half of the array values, else returns -1', ()=> {
  expect(solution([3, 4, 3, 2, 3, -1, 3, 3])).toEqual(0);
  expect(solution([3, 4, 3, 2, 3, -1, 5, 3])).toEqual(-1);
  expect(solution([])).toEqual(-1);
});
