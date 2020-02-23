const { solution } = require ('./countDiv');

test('Returns number of integers within range A...B that are divisible by K', ()=> {
  expect(solution(6, 11, 2)).toEqual(3); 
  expect(solution(0, 1, 11)).toEqual(1); 
  expect(solution(10, 10, 5)).toEqual(1); 
  expect(solution(10, 10, 20)).toEqual(0); 
  expect(solution(10, 11, 2)).toEqual(1); 
  expect(solution(0, 0, 11)).toEqual(1); 
  expect(solution(1, 1, 11)).toEqual(0); 
  expect(solution(11, 345, 17)).toEqual(20); 
  expect(solution(110, 345, 15)).toEqual(16); 
});
