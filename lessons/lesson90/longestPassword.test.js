const { solution } = require('./longestPassword');

// Brief:
  // A valid password contains:
    // Only alphanumerical characters (a−z, A−Z, 0−9)
    // An even number of letters, and
    // An odd number of digits

test('Returns longest valid password as per brief, else returns -1', () => {
  expect(solution("test 5 a0A pass007 ?xy1")).toEqual(7);
  expect(solution("what 567 %^ A12bY45pl65U7MT")).toEqual(15);
  expect(solution("what why 1234 they78")).toEqual(-1);
});
