function solution(A) {
  // when array is empty...
    if(A.length === 0) {
      return 1;
  }

  // when array has one element...
  if (A.length === 1) {
    if(A[0] <= 0) {
       return 1;
    } else if (A[0] === 1) {
       return 2;
    } else {
       return 1;
    }
  }

  // sorted copy of array in ascending order
  let arr = A.sort((a, b)=> {
      return a - b;
  });
  
  // when largest number is zero or less...
  if (arr[arr.length-1] <= 0) {
      return 1;
  }
  
  // filter negative numbers
  arr = arr.filter(num=>num>0);

  // when smallest number is greater than 1...
  if(arr[0] > 1) {
      return 1;
  }
  
  // for loop only receives an ordered array with integers 0 or greater
  // indenfity first gap in ordered array
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] >= arr[i] + 2) {
        return arr[i] + 1;
      }
  }

  // else return largest number plus one
  return arr[arr.length - 1] + 1;
}

// Time complexity: O(N) or O(N * log(N))
 
module.exports = { solution }; 
