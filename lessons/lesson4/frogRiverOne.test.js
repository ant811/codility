const { solution } = require('./frogRiverOne');

test('Finds earliest position in array A where all integers in range [1...X] have been located in array', ()=> {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
  expect(solution(6, [1, 3, 1, 4, 2, 3, 6, 4])).toEqual(-1);
  expect(solution(12, [7, 10, 1, 3, 9, 15, 1, 5, 4, 12, 2, 3, 6, 4, 13, 8, 11, 1, 6, 12])).toEqual(16);
});
