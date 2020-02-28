function solution(A, B) {
  if (A.length === 0) {
    return 0;
  }

  const survivors = [];
  let isDownstreamTraveler;
  const downStreamTravelers = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 0 && isDownstreamTraveler === undefined) {
      survivors.push(A[i]);
    } else {
      if(B[i] === 1) {
        isDownstreamTraveler = true;
        downStreamTravelers.push(A[i]);
      } else if (B[i] === 0) {
        if(A[i] > downStreamTravelers[downStreamTravelers.length - 1]) {
          while(downStreamTravelers.length !==0 && A[i] > downStreamTravelers[downStreamTravelers.length-1]) {
            downStreamTravelers.pop();
          }
          if(downStreamTravelers.length === 0) {
            survivors.push(A[i]);
          }
        } else if(downStreamTravelers.length === 0) {
          survivors.push(A[i]);
        }
      }
    }
  }

  return survivors.concat(downStreamTravelers).length;  
}

// Time complexity according to Codility test suite: O(n)
// However, I was expecting worst-case time complexity to be O(n*n):
  // Line 18 is a while loop within a for loop
  // Looping within a loop can potentially produce quadratic time complexity 

module.exports = { solution };
