const { solution } = require('./ladder');

// Brief:
  // Non-empty array A contains L integers
  // Non-empty array B also contains L integers 
  // For each integer N in array A, calculate the following:
    // N represents the rungs in a ladder
    // Find the number of different ways to reach rung N, moving only 1 or 2 spaces at a time
      // E.g., for N = 4, there are 5 different ways to reach rung N:
        // 1, 1, 1, 1
        // 1, 1, 2
        // 1, 2, 1
        // 2, 1, 1
        // 2, 2
  // To accomodate for large ladders, return each result A[i] modulo 2^B[i]

test('Returns array of integers representing the number of different ways to climb each ladder as per the brief', () => {
  expect(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])).toEqual([5, 1, 8, 0, 1]);
  expect(solution([20, 20, 19, 19, 18, 18, 17, 16, 16, 15, 15, 15, 14, 14, 13, 12, 10, 10, 9, 9], [3, 2, 3, 2, 3, 2, 6, 4, 2, 3, 6, 7, 8, 4, 5, 2, 3, 7, 5, 6])).toEqual([2, 2, 5, 1, 5, 1, 24, 13, 1, 3, 27, 91, 98, 2, 25, 1,1, 89, 23, 55]);
});
