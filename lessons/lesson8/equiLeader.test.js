const { solution } = require('./equiLeader');

// Brief:
  // A leader is a value that appears in more than half of the elements in an array
  // An equi leader is an index that splits an array into two halves where the leader in each half is the same leader
    // E.g: Array A is [4, 3, 4, 4, 4, 2], whose leader is 4
    // O is an equi leader as it splits the array into two halves where 4 is leader is both halves:
      // [4]
      // [3, 4, 4, 4, 2]
  // Return the total number of equi leaders

test('Returns the correct number of equi leaders as per the brief', ()=> {
  expect(solution([4, 3, 4, 4, 4, 2])).toEqual(2);
  expect(solution([4, 3, 4, 4, 4, 2, 4, 3, 4])).toEqual(5);
  expect(solution([0])).toEqual(0);
  expect(solution([])).toEqual(0);
  expect(solution([4, 3, 4, 3, 4, 2])).toEqual(0);
});
