function solution(A) {
  if (A.length === 0) {
    return 0;
  }
  
  const countsData = A.reduce((acc, element) => {
    acc[element] = acc[element] + 1 || 1;
    return acc;
  }, {});
  
  let leader;
  
  for (let key in countsData) {
    if(countsData[key] > A.length / 2) {
      leader = parseInt(key);
    }
  }
  
  if (leader === undefined) {
    return 0;
  }
  
  let leaderCounts = countsData[leader];
  let iterLeaderCounts = 0;
  let length = A.length;
  let equiLeaders = 0;
  
  for (let i = 0; i < A.length; i++) {
    let slice = i + 1;
    if(A[i] === leader) {
      iterLeaderCounts++;
    }
    if ( 
        ((iterLeaderCounts / slice) > (1/2))
        &&
        (((leaderCounts - iterLeaderCounts) / (length - slice)) > (1/2))
       ) {
      equiLeaders++;
    }
  }
  return equiLeaders;
}

// Time complexity: O(n)

module.exports = { solution };
