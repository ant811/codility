const { solution } = require('./numberOfDiscIntersections');

// Brief:
  // A non-empty array A represents discs on an x-axis
  // Discs are centered on their index i
  // Each element A[i] represents the size of the disc from the disc's center
  // E.g.,in array [1, 5, 2, 1, 4, 0]: 
    // A[0] is a disc centered on position 0 and covers range from -1, 0, 1
    // A[1] is a disc centered on position 1 and covers range from -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6
    // A[2] is a disc centered on position 2 and covers range from 0, 1, 2, 3, 4
  // Return total number of disc intersections

test('Returns disc intersections as per the brief', ()=> {
  expect(solution([1, 5, 2, 1, 4, 0])).toEqual(11);
  expect(solution([1, 5, 8, 7, 8, 4, 8, 5, 0, 5, 3, 12, 2, 2])).toEqual(75);
  expect(solution([1, 5, 8, 7, 8, 4, 8, 5, 0, 5, 3, 12, 6, 67, 34, 4, 45])).toEqual(123);
  expect(solution([1, 5, 8, 7, 8, 4, 8, 5, 0, 5])).toEqual(41);
});
