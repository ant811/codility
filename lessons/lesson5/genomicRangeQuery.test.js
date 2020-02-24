const { solution } = require('./genomicRangeQuery');

// Brief:
  // Non-empty string S (a DNA sequence) contains the following chars in any order and frequency: A, C, G, T
  // Each letter represents an impact factor of 1...4: A=1, C=2, G=3, T=4
  // Equal length arrays P and Q contain start and end points of a sequence slice: Sequence1 = S.slice(P[0], Q[0] + 1)
  // Return an array containing the lowest impact factor of each sequence slice

test('Returns array with smallest genome in sequence as per brief', ()=> {
  expect(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([ 2, 4, 1 ]);
  expect(solution('TC', [0, 0, 1], [0, 1, 1])).toEqual([4, 2, 2]);
  expect(solution('CAGCCTATTTC', [0, 4, 7], [4, 8, 9])).toEqual([1, 1, 4]);
});
