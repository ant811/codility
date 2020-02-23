const { solution } = require ('./missingInteger');

test('Finds smallest positive integer not present in array', ()=> {
  expect(solution([])).toEqual(1);
  expect(solution([1])).toEqual(2);
  expect(solution([2])).toEqual(1);
  expect(solution([-90])).toEqual(1);
  expect(solution([0])).toEqual(1);
  expect(solution([87])).toEqual(1);
  expect(solution([1, 3, 6, 4, 1, 2])).toEqual(5);
  expect(solution([4, 10, 8, -7, 1, 6, 3, -2, 0, 7, 1, 0, -6, 2, 2, 5, 11])).toEqual(9)
  expect(solution([-1000000, 1000000])).toEqual(1);
  expect(solution([-1000000, 0, 1000000])).toEqual(1);
  expect(solution([-1000000, 1, 1000000])).toEqual(2);
  expect(solution([-1, -1000000, -90, -4, -10, -2])).toEqual(1);
  expect(solution([-1, -1000000, -90, -4, 0, -10, -2])).toEqual(1);
  expect(solution([1, 1, 3, 3, 2, -1000000, -1, 6, 7, 8, 4, 1, 1, 1000000, 1, 1, 2, 3, 4, 6, 6, 6, 7, 78])).toEqual(5);
});
