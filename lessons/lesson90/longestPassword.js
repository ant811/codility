function solution(S) {
  let longest = -1;
  const words = S.split(' ');  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letters = 0;
    let numbers = 0;
    let alphanemeric = true;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      let charCode = char.charCodeAt(0);
      if (charCode > 47 && charCode < 58) {
         numbers++;
      } else if (charCode > 64 && charCode < 91) {
        letters++;
      } else if (charCode > 96 && charCode < 123) {
        letters++;
      } else {
        alphanemeric = false;
        break;
      }
    }

    if (alphanemeric === true &&
      letters % 2 === 0 &&
      numbers % 2 === 1) {
      longest = Math.max(longest, word.length);
    }
  }

  return longest;
}

// Time complexity: O(n * m)

module.exports = { solution };
