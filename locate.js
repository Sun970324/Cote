function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let locate = [0, 0];
  let score = 0;
  const N = board.length - 1;
  while (operation.length > 0) {
    if (operation[0] === "U") locate[0]--;
    if (operation[0] === "D") locate[0]++;
    if (operation[0] === "L") locate[1]--;
    if (operation[0] === "R") locate[1]++;

    if (locate[0] > N || locate[1] > N || locate[0] < 0 || locate[1] < 0)
      return "OUT";

    if (board[locate[0]][locate[1]] === 1) score++;

    operation = operation.slice(1);
  }
  return score;
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];
console.log(boardGame(board1, "LRRDLLD"));
