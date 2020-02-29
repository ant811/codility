function solution(H) {
  let blocks = [];
  let head;
  let tail;
  let counter = 0;
  for (let i = 0; i < H.length; i++) {
    let element = H[i];
    if(blocks.length === 0) {
      blocks.push(element);
      head = element;
      tail = element;
      counter++;
    } else {
      if (element > tail) {
        tail = element;
        blocks.push(element);
        counter++;
      } else if (element < tail && element >= head) {
        while (element < tail) {
          blocks.pop();
          tail = blocks[blocks.length - 1];
        }

        if (tail !== element) {
          tail = element;
          blocks.push(element);
          counter++;
        }
      } else if (element < head) {
        tail = element;
        head = element;
        counter++;
        blocks = [element];
      }
    }
  }

  return counter;
}

// Time complexity: O(n)

module.exports = { solution };
