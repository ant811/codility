const { solution } = require('./stoneWall');

// Brief:
  // Non-empty array H contains positive integers
  // Each integer represents the height of a wall at each position i
  // Return the minimal number of blocks needed to build the wall

test('Returns the minimal number of blocks needed to build a wall as per the brief', ()=> {
  expect(solution([3, 7, 8, 6, 5, 9, 2, 8, 7, 8, 2, 1])).toEqual(11);
  expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toEqual(7);
  expect(solution([3, 7, 8, 6, 5, 9, 4, 3, 2])).toEqual(8);
});
