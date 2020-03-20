const { solution } = require('./floodDepth');

// Brief:
  // Non-empty array A contains integers that represent alpine altitudes
  // After a rainfall, the basins fill with water, creating lakes
  // Return the maximal lake depth 
  // E.g.: For array [2, 3, 2, 4, 3, 1, 2, 3, 1, 2], the maximal depth is 2
    //                   XXXXX
    //       XXXXX water XXXXX XXXXX water water XXXXX   
    // XXXXX XXXXX XXXXX XXXXX XXXXX water XXXXX XXXXX water XXXXX
    // XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX
    
test('Returns maximal depth as per the brief', () => {
  expect(solution([2, 3, 2, 4, 3, 1, 2, 3, 1, 2])).toEqual(2);
  expect(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2])).toEqual(2);
  expect(solution([1, 2, 3])).toEqual(0);
  expect(solution([20, 4, 10, 1, 3])).toEqual(6);
  expect(solution([1, 2, 10, 8, 7, 3, 2, 5, 6, 3, 1, 2, 8])).toEqual(7);
  expect(solution([80, 35, 2, 13, 1])).toEqual(11);
});
