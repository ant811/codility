const { solution } = require('./flags');

// Brief:
  // A non-empty Array A contains N integers
  // A peak is an integer that is larger than both of its neighbors
  // The goal is the determine the maximal number of flags that can be placed on peaks given the following:
    // The number of flags K is also the minimal index difference between peaks that can receive a flag
    // When placing a flag on a peak, the next flag's peak must an indexed difference of K or more
    // Consider that the maximal number of flags may be less than the number of peaks
    // E.g. in Array [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]:
      // The following are the indexed peaks: [1, 3, 5, 10]
      // When trying to place 4 flags:
        // A flag at 1 means that the next flag must be at index 1 + 4 or greater
        // The next flag following 1 must be at index 5 as 3 is skipped over
        // The next flag following 5 is index 10
        // The attempt was limited to 3 flags at [1, 5, 10]
      // When trying to place 3 flags:
        // A flag at 1 means that the next flag must be at index 1 + 3 or greater
        // The next flag following 1 must be at index 5 as 3 is skipped over
        // The next flag following 5 is index 10
        // The attempt produced 3 flags at [1, 5, 10]
      // When trying to place 2 flags:
        // A flag at 1 means that the next flag must be at index 1 + 2 or greater
        // The next flag following 1 is index 3
        // Since 2 flags were already placed, no more can be placed
        // The attempt procuded twop flags at [1, 3]

test('Returns maximal number of flags as per the brief', ()=> {
  expect(solution([1, 2])).toEqual(0);
  expect(solution([1, 2, 3])).toEqual(0);
  expect(solution([1, 2, 1])).toEqual(1);
  expect(solution([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7])).toEqual(3);
  expect(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
  expect(solution([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,99,102,99,104,99,106,99,99,99,99,111,99,99,99,99,99,99,99,99,120,99])).toEqual(4);
  expect(solution([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,99,102,99,104,99,106,99,99,99,99,111,99])).toEqual(3);
});
