function solution(A) {
  if (A.length === 0) {
    return -1;
  }

  let countsData = A.reduce((acc, element)=> {
    acc[element] = acc[element] + 1 || 1;
    return acc;
  }, {});
  
  let dominator;
  
  for (let key in countsData) {
    if(countsData[key] > (A.length / 2) ) {
      dominator = parseInt(key);
    }
  }
  
  if(dominator === undefined) {
    return -1;
  }
  
  for (let i = 0; i < A.length; i++) {
    if(A[i] === dominator) {
      return i;
    }
  }
}

// Time complexity: O(n)

module.exports = { solution };
