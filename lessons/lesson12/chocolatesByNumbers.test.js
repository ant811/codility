const { solution } = require('./chocolatesByNumbers');

// Brief:
  // Integer N represents the number of chocolates arranged in a circle
  // Integer M represents the number of spaces skipped after eating a chocolate
  // Starting point is position 0
  // When a chocolate is encountered: 1) it is eaten, 2) the wrapper is left behind, and 3) the next space is M spaces away
  // When a wrapper is encountered instead of a chocolate (I.e., the space has already been visited), the cycle ends
  // Return the number of chocolates eaten
    // E.g., when N = 10 and M = 4, five chocolates in total were eaten at the positions in the following order: 0=>4=>8=>2=>6
    // NOTE: After position 6, the next position is 0, which has a wrapper as it was already visited

test('Returns the number of chocolates eaten as per the brief', () => {
  expect(solution(10, 4)).toEqual(5);
  expect(solution(947853, 4453)).toEqual(947853);
  expect(solution(100, 15)).toEqual(20);
});
