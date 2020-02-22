const { solution } = require('./permMissingElem');
const { largeRange1, largeRange2 } = require('./largeRanges');

test('Finds missing element in array A of N different integers, from range [1...(N + 1)]', ()=> {
  expect(solution([1, 2, 3, 5])).toEqual(4);
  expect(solution([])).toEqual(1);
  expect(solution([1])).toEqual(2);
  expect(solution([2])).toEqual(1);
  expect(solution([1, 2, 3, 4, 5, 6])).toEqual(7);
  expect(solution([2, 3, 4, 5, 6, 7])).toEqual(1);
  expect(solution(largeRange1)).toEqual(83);
  expect(solution(largeRange2)).toEqual(811);
});