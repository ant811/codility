const { solution } = require('./countFactors');

test('Returns the number of factors of a positive integer', ()=> {
  expect(solution(25)).toEqual(3);
  expect(solution(24)).toEqual(8);
  expect(solution(100)).toEqual(9);
  expect(solution(101)).toEqual(2);
  expect(solution(1020)).toEqual(24);
});
