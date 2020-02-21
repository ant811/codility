const { solution } = require('./oddOccurrencesInArray');

test('Finds single odd occurrence in array', ()=> {
  expect(solution([2, 3, 2, 3, 3, 4, 3])).toEqual(4);
  expect(solution([2, 3, 2, 3, 3, 3, 3])).toEqual(3);
  expect(solution([2, 3, 0, 2, 9, 3, 8, 3, 3, 8, 9])).toEqual(0);
});
