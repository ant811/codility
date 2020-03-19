const { solution } = require('./numberSolitaire');

// Brief:
  // Array A contains integers that represent values for consecutive squares on a game board
  // The player's pebble starts at position A[0]
  // Each turn, the player rolls a six-sided die
  // The player moves the pebble forward according to the value of the die roll, only while the pebble does not go beyond the end of the board
    // E.g. 
      //If: 
        // The pebble is 2 spaces from the end of the board, and 
        // The player rolls a 3
      // Then the player does not move and instead re-rolls until they roll a 1 or 2
  // The game ends when the player's pebble reaches A[A.length - 1]
  // The value of each space, A[i], that the pebble lands on is added to the player’s score (initialized at A[0])
  // Return the highest possible score that can be obtained per given board (I.e., array A)

test('Returns maximal possible score as per the brief', () => {
  expect(solution([1, -2, 0, 9, -1, -2])).toEqual(8);
  expect(solution([2, 45, -20, -7, -12, 3, 0, 1, 34, 0])).toEqual(85);
  expect(solution([2, -9, 10, -20, 25, 23, 12, 0])).toEqual(72);
  expect(solution([2, -4, 15, -12, -18, -16, -4, -14, -12, -11, -11, -10, -19, 0, 3, 1, 0])).toEqual(9);
});
