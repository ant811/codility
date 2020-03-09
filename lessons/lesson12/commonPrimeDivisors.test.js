const { solution } = require('./commonPrimeDivisors');

// Brief:
  // Non-empty arrays A and B contain the same number of positive integers
  // A pair is A[i] and B[i]
  // When both integers in the pair share the same prime divisors, increment a counter
  // Return the number of counts

test('Returns a count of sets that have the same number or prime divisors as per the brief', () => {
  expect(solution([15, 10, 3], [75, 30, 5])).toEqual(1);
  expect(solution([3, 22, 6, 15], [75, 44, 12, 45])).toEqual(3);
});