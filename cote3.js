/*
저번에 이어, 또다시 N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다.
그러나, 게임의 룰은 저번과 조금 달라졌습니다.

좌표 왼쪽 상단(0, 0)에 말을 놓는다.

말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.

조작의 기회는 딱 한 번 주어진다.

조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
예시: UDDLLRRDRR, RRRRR

한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.

방문한 곳을 또 방문해도 점수를 획득할 수 없다.

말은 보드 밖으로 나갈 수 없으며, 해당 조작은 무효가 된다.
예시: 2*2 보드판에서 UD를 조작한다면, U는 무효가 되고, D부터 시작한다.

칸 안의 숫자는 0부터 100,000 중에 하나이다.
음수는 없습니다.
획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.

주의사항
처음 말을 (0, 0) 좌표에 놓았을 때 안에 들은 숫자는 계산에 포함하지 않습니다.
두 번째로 (0, 0) 좌표를 밟았을 때만 계산합니다.
보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때,
말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.
*/
/*
function test3(board, operation) {
  let locate = [0, 0];
  let score = 0;
  const N = board.length - 1;
  let command = "";
  while (operation.length > 0) {
    if (operation[0] === "U") {
      command = "U";
      locate[0]--;
    }
    if (operation[0] === "D") {
      command = "D";
      locate[0]++;
    }
    if (operation[0] === "L") {
      command = "L";
      locate[1]--;
    }
    if (operation[0] === "R") {
      command = "R";
      locate[1]++;
    }

    if (locate[0] > N || locate[1] > N || locate[0] < 0 || locate[1] < 0) {
      if (command === "U") locate[0]++;
      if (command === "D") locate[0]--;
      if (command === "L") locate[1]++;
      if (command === "R") locate[1]--;
    }else if(board[locate[0]][locate[1]] !== 0) {
      score += board[locate[0]][locate[1]];
      board[locate[0]][locate[1]] = 0;
    }

    operation = operation.slice(1);
  }
  return score;
}
*/

function test3(board, operation) {
  // TODO: 여기에 코드를 작성하세요.

  let c = 0;
  let r = 0;
  let count = 0;
  let matrix = board;
  let before = "";
  const recursion = (operation) => {
    if (operation.length === 0) return;
    if (operation[0] === "U") {
      before = "U";
      c -= 1;
    }
    if (operation[0] === "L") {
      before = "L";
      r -= 1;
    }
    if (operation[0] === "D") {
      before = "D";
      c += 1;
    }
    if (operation[0] === "R") {
      before = "R";
      r += 1;
    }

    if (0 > c || c > board.length - 1 || 0 > r || r > board[0].length - 1) {
      if (before === "U") c += 1;
      if (before === "L") r += 1;
      if (before === "D") c -= 1;
      if (before === "R") r -= 1;
    } else {
      count += matrix[c][r];
      matrix[c][r] = 0;
    }
    recursion(operation.substr(1));
  };
  recursion(operation);
  return count;
}

const board1 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0],
];
const output1 = test3(board1, "RRDLLD");
console.log(output1); // 102

const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0],
];
const output2 = test3(board2, "UUUDD");
console.log(output2); // 878

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
const output3 = test3(board3, "DDRRRUDUDUD");
console.log(output3); // 0
const board4 = [
  [4345, 112, 11, 756],
  [1, 1, 1, 0],
  [456, 238, 77, 7],
  [0, 0, 0, 0],
];
const output4 = test3(board4, "RRDLLDDLLRRDDDLLRUUUU"); // 820
console.log(output4);
