const { solution } = require('./brackets');

// Brief:
  // A string is properly nested when:
    // It is empty, or
    // A bracket, brace or parenthesis does not close before a nested bracket, brace or parenthesis closes, and
    // Every open bracket, brace or parenthesis closes
  // String S only contains the characters {}[]()

test('Returns 1 when string is properly nested (as per the brief), else returns 0', ()=> {
  expect(solution('{[()()]}')).toEqual(1);
  expect(solution('([)()]')).toEqual(0);
  expect(solution('[[[[')).toEqual(0);
  expect(solution('')).toEqual(1);
});
