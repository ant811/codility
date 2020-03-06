const { solution } = require('./countNonDivisible');

// Brief:
  // A non-empty array A contains positive integers
  // For each element in the array, determine how many of the other elements in the array are not a divisor of the element
  // Return an array of non-divisors
  // I.e., result[i] is how many other elements in array A that are not a divisor of array[i]

test('Returns array of non-divisible numbers as per the brief', () => {
  expect(solution([3, 1, 2, 3, 6])).toEqual([2, 4, 3, 2, 0]);
  expect(solution([1, 4, 3, 6, 9, 12, 13, 20, 5, 18])).toEqual([ 9, 8, 8, 7, 7, 5, 8, 6, 8, 5 ]);
  expect(solution([3, 3, 3, 3])).toEqual([0, 0, 0, 0]);
  expect(solution([2, 3, 7, 11, 13])).toEqual([ 4, 4, 4, 4, 4 ]);
});