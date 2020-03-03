const { solution } = require('./maxSliceSum');

test('Returns the largest sum of any slice of array', ()=> {
  expect(solution([3, 2, -6, 4, 0])).toEqual(5);
  expect(solution([0])).toEqual(0);
  expect(solution([-4, 4])).toEqual(4);
  expect(solution([-4, 0])).toEqual(0);
  expect(solution([-4, 0, 4, 1, -1])).toEqual(5);
});
