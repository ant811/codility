const { solution } = require('./fibFrog');

// Brief
  // Array A contains N integers, and only contains 0s and 1s
  // Each 1 represents a leaf on a stream, and each 0 is water
  // A frog sits on a riverbank at position -1 and wants to reach the other bank at position N
  // The frog can only jump between positions -1 and N
  // The distance traveled per jump must be a Fibonacci number
  // The frog can only land on leaves and on the opposite bank (I.e., the frog cannot land on a 0 or at a distance greater than the opposite bank at position N)
  // Return the minimal number of jumps it takes for the frog to reach the other bank, or return -1 if the frog cannot reach the other bank
    // E.g., if A is [0, 0, 0, 0]:
      // The frog needs to travel 5 spaces from a bank at position -1 to the opposite bank at position 4
      // 5 is a Fibonacci number, thus the frog can reach the other bank in one jump

test('Returns minimal number of jumps as per the brief', () => {
  expect(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);
  expect(solution([1, 0, 0, 0, 1, 0])).toEqual(2);
  expect(solution([0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0])).toEqual(2);
  expect(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0])).toEqual(3);
  expect(solution([0, 0, 0, 0])).toEqual(1);
  expect(solution([0, 0, 0])).toEqual(-1);
  expect(solution([0, 1, 0])).toEqual(2);
  expect(solution([0, 0])).toEqual(1);
});
