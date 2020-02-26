const { solution } = require('./maxProductOfThree');

test('Returns lowest possible product of any three elements in array', ()=> {
  expect(solution([-5, 5, -5, 4])).toEqual(125);
  expect(solution([-5, -6, -4, -7, -10])).toEqual(-120);
  expect(solution([-3, 1, 2, -2, 5, 6])).toEqual(60);
  expect(solution([-1, -1, 0, 9])).toEqual(9);
  expect(solution([1, -1, 0, 9])).toEqual(0);
});
