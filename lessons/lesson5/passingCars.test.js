const { solution } = require('./passingCars');

//Brief:
  //Non-empty array A contains only 1s and Os
  //If: 
    //The Os are cars traveling east, and 
    //The 1s are cars traveling west 
  //Then return the total number of times any two cars pass
  // NOTE: Return -1 when the total exceeds 1000000000

test('Returns correct number of passing cars as per the brief', ()=> {
  expect(solution([0, 1, 0, 1, 1])).toEqual(5);
  expect(solution([1, 0, 0, 0, 1, 1])).toEqual(6);
  expect(solution([0, 1, 0, 0, 0, 1, 1])).toEqual(9);
  expect(solution([0, 1, 0, 1, 0, 1, 0, 1])).toEqual(10);
});
