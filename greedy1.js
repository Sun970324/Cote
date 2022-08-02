function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a, b) => a - b);
  let count = 0;
  while (stuff.length > 0) {
    if (stuff[0] + stuff[stuff.length - 1] > limit) {
      count = count + 1;
      stuff.pop();
    } else {
      stuff.shift();
      stuff.pop();
      count = count + 1;
    }
  }
  return count;
}

console.log(movingStuff([42, 25, 60, 73, 103, 167], 187));
