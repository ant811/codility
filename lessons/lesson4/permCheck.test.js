const { solution } = require ('./permCheck');

test('Returns 1 when array is a permutation', ()=> {
  expect(solution([1])).toEqual(1);
  expect(solution([4, 3, 1, 2])).toEqual(1);
  expect(solution([1, 2, 5, 7, 6, 4, 8, 3])).toEqual(1);
  expect(solution([1, 2])).toEqual(1);
});

test('Returns 0 when array is not a permutation', ()=> {
  expect(solution([0])).toEqual(0);
  expect(solution([2])).toEqual(0);
  expect(solution([3, 4])).toEqual(0);
  expect(solution([1, 2, 5, 7, 6, 8, 3])).toEqual(0);
});
