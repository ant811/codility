const { solution } = require('./minMaxDivision');

// Brief:
  // Non-empty array A contains integers  
  // Every integer is not greater than M
  // Divide the array into every possible arrangement of K amount of blocks
  // The elements must stay in consecutive order
  // Confirm the sum of each section
  // Every possible arrangement will produce K sums, one for each block section
  // Of all of the maximal sums per each arrangement, return the lowest maximal sum
    //E.g.:
      // K is 2, M is 4, Array A is: [1, 2, 3, 4]
      // All possible block arrangements and sums are:
      // [1, 2, 3, 4], [] => sums are 10, 0.  Maximal is 10
      // [1, 2, 3], [4] => sums are 6, 4.  Maximal is 6
      // [1, 2], [3, 4] => sums are 3 and 7.  Maximal is 7
      // [1], [2, 3, 4] => sums are 1 and 9.  Maximal is 9
      // The lowest maximal sum is 6 

test('Returns the minimal of all maximal sums as per the brief', () => {
  expect(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])).toEqual(6);
  expect(solution(2, 6, [2, 1, 5, 1, 3, 6, 3, 5, 2, 1, 1, 4, 1, 6])).toEqual(21);
  expect(solution(1, 3, [1, 1, 5, 1, 2, 1, 2])).toEqual(13);
  expect(solution(7, 3, [1, 1, 5, 1, 2, 1, 2])).toEqual(5);
  expect(solution(2, 4, [1, 2, 3, 4])).toEqual(6);
});
