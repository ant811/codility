const { solution } = require('./countSemiprimes');

// Brief:
  // A semi-prime number is the product of two prime numbers
  // Consider all semi-prime numbers given the range 1 <= N
    // E.g.:
      // N is 26
      // All prime numbers from 1 to 26 are [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
      // All semi-prime numbers within the same range are [ 4, 6, 9, 10, 14, 15, 21, 22, 25, 26 ]
  // Arrays P and Q contain starting and ending points for the range of semi-prime numbers to find
  // Return all semi-prime numbers for each range
   // E.g.: For N = 26, P = [1, 4, 16], Q = [26, 10, 20]:
     // All semi-prime numbers between 1 and 26 are [ 4, 6, 9, 10, 14, 15, 21, 22, 25, 26 ]
     // All semi-prime numbers between 4 and 10 are [ 4, 6, 9, 10 ]
     // All semi-prime numbers between 16 and 20 are [ ]
     // The result should be [ 10, 4, 0]

test('Returns semi-prime numbers in a given set of ranges as per the brief', () => {
  expect(solution(26, [1, 4, 16, 16], [26, 10, 20, 21])).toEqual([ 10, 4, 0, 1 ]);
  expect(solution(26, [4, 9, 0, 25, 15, 10], [21, 14, 3, 26, 26, 14])).toEqual([ 7, 3, 0, 2, 5, 2 ]);
});
