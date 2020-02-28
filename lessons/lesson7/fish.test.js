const { solution } = require('./fish');

// Brief: 
  // Array A represents fish by unique size in integers, traveling at the same speed
  // Array B represents the direction of fish: 0 is upstream, 1 is downstream
    // E.g., Fish A[i] is traveling in direction B[i]
  // When fish collide, the bigger fish eats the smaller fish
  // Return number of surviving fish

test('Returns correct number of surviving fish as per the brief', ()=> {
  expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
  expect(solution([4, 3, 2, 1, 5, 9, 10], [0, 1, 0, 1, 0, 0, 0])).toEqual(4);
  expect(solution([3, 4, 2, 1, 5], [1, 1, 0, 1, 0])).toEqual(1);
  expect(solution([3, 4, 2, 1, 5, 10], [1, 1, 0, 1, 0, 1])).toEqual(2);
  expect(solution([], [])).toEqual(0);
});
