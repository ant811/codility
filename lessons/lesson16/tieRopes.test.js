const { solution } = require('./tieRopes');

test('Greedy algorithm returns maximal number of ropes greater than/equal to K that can be constructed using rope lengths in array', () => {
  expect(solution(4, [1, 2, 3, 4, 1, 1, 3])).toEqual(3);
  expect(solution(4, [1, 5, 3, 6, 1, 1, 1, 2, 3, 6, 2, 3, 4])).toEqual(6);
  expect(solution(5, [1, 5, 3, 6, 1, 1, 1, 2, 3, 6, 2, 3, 4])).toEqual(5);
  expect(solution(6, [1, 5, 3, 6, 1, 1, 1, 2, 3, 6, 2, 3, 4])).toEqual(5);
  expect(solution(7, [2, 5, 4, 6, 1, 1, 1, 1, 3, 2, 2, 3, 4])).toEqual(4);
  expect(solution(5, [2, 5, 4, 6, 1, 1, 1, 1, 3, 2, 2, 3, 4])).toEqual(4);
});
