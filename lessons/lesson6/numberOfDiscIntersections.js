function solution(A) {
  const startPoints = [];
  const endPoints = [];
  for (let i = 0; i < A.length; i++) {
    startPoints.push(i - A[i]);
    endPoints.push(i + A[i]);
  }
  startPoints.sort((a, b)=> {
    return a - b;
  });
  endPoints.sort((a, b) => {
    return a - b;
  });
  
  let intersections = 0;
  let activeDiscs = 0;
  let endIndex = 0;
  for (let i = 0; i < startPoints.length; i++) {
    if (startPoints[i] <= endPoints[endIndex]) {
      intersections+=activeDiscs;
      activeDiscs++;
      if (intersections > 10000000) {
       return -1;
      }
    } else {
      while (startPoints[i] > endPoints[endIndex]) {
        endIndex++;
        activeDiscs--;
      }
      intersections+=activeDiscs;
      activeDiscs++;
      if (intersections > 10000000) {
        return -1;
      }
    }
  }

  return intersections;
}

// Time complexity - O(n * log(n)) or O(n) when array is already sorted

module.exports = { solution };
