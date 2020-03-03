const { solution } = require('./maxProfit');

// Brief:
  // Array A contains prices of a stock for N consecutive days
  // A share is bought on day P and sold on day Q (thus P < Q)
  // Find the largest profit possible.  I.e., Find greatest difference for A[Q] - A[P]
  // Return 0 if a profit is not possible

test('Returns maximum profit as per the brief', ()=> {
  expect(solution([23171, 21011, 21123, 21366, 21013, 21367])).toEqual(356);
  expect(solution([23171, 21011, 21123, 21366, 21013, 21367, 21010])).toEqual(356);
  expect(solution([5, 4, 3, 2, 1])).toEqual(0);
  expect(solution([8, 9, 3, 6, 1, 2])).toEqual(3);
  expect(solution([9])).toEqual(0);
});
