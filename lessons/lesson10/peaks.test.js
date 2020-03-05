const { solution } = require('./peaks');

// Brief:
  // Non-empty array A contains integers 1 or greater
  // A peak is an integer that is greater than both of its neighbors
  // Return the maximal number of same-length slices that each contain a peak of array A

test('Returns the maximal number of same-length slices that each contain a peak of array A (as per the brief)', ()=> {
  expect(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
  expect(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 6, 2])).toEqual(1);
  expect(solution([1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1])).toEqual(4);
  expect(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2, 1, 2, 5, 2])).toEqual(4);
  expect(solution([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,99,102,99,104,99,106,99,99,99,99,111,99, 99])).toEqual(1);
  expect(solution([1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1])).toEqual(2);
  expect(solution([1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1])).toEqual(4);
  expect(solution([1, 2, 1])).toEqual(1);
  expect(solution([1, 2, 1, 2, 1, 1])).toEqual(2);
  expect(solution([1, 2, 3])).toEqual(0);
});
