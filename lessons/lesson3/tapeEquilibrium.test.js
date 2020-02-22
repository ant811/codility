const { solution } = require('./tapeEquilibrium');

test('For non-empty array A with N integers, for any integer P where 0 < P < N, finds minimal absolute difference between sums of two parts of array split at P', ()=> {
  expect(solution([3, 1, 2, 4, 3])).toEqual(1);
  expect(solution([-100, 3, -78, 1, 2, 4, 3, 50])).toEqual(79);
  expect(solution([6, -90, 80, 45, 5, -78, 37])).toEqual(7);
});
