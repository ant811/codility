const { solution } = require('./countTriangles');

test('Returns the number of possible triangles that can be made from an array of edges', () => {
  expect(solution([3, 3, 5, 6, 2, 3])).toEqual(11);
  expect(solution([3, 3, 5, 6, 2, 7, 3, 6, 8, 9, 3])).toEqual(87);
  expect(solution([3, 3, 5, 6])).toEqual(3);
});