const { solution } = require('./minPerimeterRectangle');

test('Returns the minimal perimeter of a rectangle with area N', ()=> {
  expect(solution(1)).toEqual(4);
  expect(solution(30)).toEqual(22);
  expect(solution(100)).toEqual(40);
  expect(solution(144)).toEqual(48);
  expect(solution(49)).toEqual(28);
});