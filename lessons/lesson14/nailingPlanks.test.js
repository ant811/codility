const { solution } = require('./nailingPlanks');

// Brief:
  // Non-empty arrays A, B and C contain positive integers
  // A[i] is the beginning of a plank and B[i] is the ending of a plank
  // Array C contains positions of nails
  // A plank can be nailed if a nail's position is >=A[i] and <=B[i]
  // Nails must be used in consecutive order
  // Return the minimal number of nails needed to nail all planks, else return -1
    // E.g., A = [1, 2], B = [3, 3], C = [1, 2, 3]
      // The two planks are (1, 3), and (2, 3)
      // Nail C[0] = 1, and can nail board (1, 3)
      // Nail C[1] = 2, and can nail both boards (1, 3), and (2, 3)
      // The third nail, 3, while it can also nail both boards is not needed
      // The minimal number of nails is 2

test('Returns minimal nails needed to nail all planks as per the brief', () => {
  expect(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])).toEqual(4);
  expect(solution([1, 2], [3, 4], [2])).toEqual(1);
  expect(solution([1], [2], [2])).toEqual(1);
  expect(solution([1, 2], [2, 5], [3])).toEqual(-1);
});