const { solution } = require('./binaryGap');

test('Finds longest gap between 1\'s in a binary integer', ()=> {
  expect(solution(9)).toEqual(2);
  expect(solution(529)).toEqual(4);
  expect(solution(20)).toEqual(1);
  expect(solution(9)).toEqual(2);
  expect(solution(32)).toEqual(0);
  expect(solution(1041)).toEqual(5);
  expect(solution(2147483647)).toEqual(0);
});
