const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  //1열, 마지막행, 마지막열 반대로
  //2 1 1 -> 3
  //3 2 2 1 1 -> 5
  //4 3 3 2 2 1 1 -> 7
  //5 4 4 3 3 2 2 1 1 -> 9
  //6 5 5 4 4 3 3 2 2 1 1 -> 11
  const N = matrix.length;
  let locate = [0, 0];
  let movePoint = [N];
  // let visited = [];
  // for (let i = 0; i < N; i++) {
  //   visited.push(Array(N).fill(false));
  // }
  let result = [];
  while (movePoint.length < matrix.length * 2 - 1) {
    movePoint.push(movePoint[movePoint.length - 1] - 1);
    movePoint.push(movePoint[movePoint.length - 1]);
  }
  while (movePoint.length > 0) {
    const moving = movePoint.shift();
    if (movePoint.length % 2 === 0) {
      console.log(`moving: ${moving}`);
      for (let i = 0; i < moving; i++) {
        result.push(matrix[locate[0]][locate[1]]);
        locate[1]++;
        console.log(locate);
      }
    } else {
      console.log(`moving: ${moving}`);
      for (let i = 0; i < moving; i++) {
        result.push(matrix[locate[0]][locate[1]]);
        locate[0]++;
        console.log(locate);
      }
    }
  }
  return result;
};

matrix = [
  ["T", "y", "r", "i"],
  ["i", "s", "t", "o"],
  ["n", "r", "e", "n"],
  ["n", "a", "L", " "],
];

console.log(spiralTraversal(matrix))
