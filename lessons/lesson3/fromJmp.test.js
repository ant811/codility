const { solution } = require('./frogJmp');

test('Returns smallest number of jumps to get from X to Y with D moves per jump', ()=> {
  expect(solution(10, 85, 30)).toEqual(3);
  expect(solution(10, 11, 10)).toEqual(1);
  expect(solution(10, 31, 10)).toEqual(3);
  expect(solution(10, 101, 10)).toEqual(10);
  expect(solution(10, 100, 10)).toEqual(9);
});
