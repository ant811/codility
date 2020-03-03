const { solution } = require('./maxDoubleSliceSum');

// Brief:
  // Non-empty array A has N integers
  // Given a triplet (X, Y, Z):
    // Where 0 <= X < Y < Z < N, and
    // The triplet produces a double slice in the array: A[X + 1] + A[X + 2] + ... + A[Y - 1] + A[Y + 1] + ... + A[Z - 1]
  // Return the largest sum of any double slice

test('Returns the maximum sum of any double slice in the array as per brief', ()=> {
  expect(solution([1, 2, 3])).toEqual(0);
  expect(solution([3, 2, 6, -1, 4, 5, -1, 2])).toEqual(17);
  expect(solution([3, 2, 6, 2, 4, 5, 8, 2])).toEqual(25);
  expect(solution([3, 2, 6, -3, 4, -1, 8, 2])).toEqual(19);
  expect(solution([3, 2, 6, 3, 4, -10, 8, 2])).toEqual(23);
});
