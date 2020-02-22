const { solution } = require('./maxCounters');

//Brief:
  //  Initial counter is array length N, initialized with zeros 
  //  For all elements in array A, A[i], either:
    //  N[A[i] - 1] is incrememented, or
    //  When A[i] equals N + 1, all counter elements equal the maximum counter element  

test('Returns array that respresents final counters as per brief', () => {
  expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  expect(solution(7, [3, 4, 8, 4, 6, 1, 8, 4, 1, 2, 6])).toEqual([ 3, 3, 2, 3, 2, 3, 2 ]);
  expect(solution(6, [3, 4, 7, 4, 7, 1, 4, 1, 2])).toEqual([ 4, 3, 2, 3, 2, 2 ]);
});
