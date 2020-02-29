const { solution } = require('./nesting');

// Brief:
  // A string is properly nested when:
    // It is empty, or
    // 1) A parenthesis does not close before a nested parenthesis closes, and
    // 2) Every open parenthesis closes
  // String S only contains the characters ()

test('Returns 1 when string is properly nested as per the brief', ()=> {
  expect(solution('(()(())())')).toEqual(1);
  expect(solution('())')).toEqual(0);
  expect(solution('')).toEqual(1);
});
