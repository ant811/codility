function solution(N) {
  let numBase2 = parseInt(N, 10).toString(2);
  let str = String(numBase2);
  let strArr = str.split('1');

  return strArr.reduce((acc, element, index) => {
    if((element[0] === '0') && 
      ( strArr[index - 1] !== undefined &&
        strArr[index + 1] !== undefined
      )
      ) { 
      return element.length > acc ? element.length : acc;
    } else {
      return acc;
    }
  }, 0);
}

module.exports = { solution };
