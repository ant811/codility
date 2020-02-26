const { solution } = require('./minAvgTwoSlice');

test('Returns first index of smallest array slice average', ()=> {
  expect(solution([4, 2, 2])).toEqual(1);
  expect(solution([4, 2, 2, 5, 1, 5, 8])).toEqual(1);
  expect(solution([2, 2, 4, 4, 1, 1, 2])).toEqual(4);
  expect(solution([-3, -5, -8, -4, -10])).toEqual(2);
  expect(solution([10, 10, -1, 2, 4, -1, 2, -1])).toEqual(5);
  expect(solution([10, 10, -1, 2, 4, -1, 2, -1, -10])).toEqual(7);
});