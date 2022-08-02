const robotPath2 = function (room, src, sDir, dst, dDir) {
  // TODO: 여기에 코드를 작성합니다.
  const goStraight = (direction) => {
    let mycase = 0;
    if (
      (src[0] === room.length - 1 && direction === 3) ||
      (src[0] === 0 && direction === 1) ||
      (src[1] === room[0].length - 1 && direction === 2) ||
      (src[1] === 0 && direction === 4)
    )
      return false;
    switch (direction) {
      case 1:
        src[0]--, (mycase = 1);
      case 2:
        src[1]++, (mycase = 2);
      case 3:
        src[0]++, (mycase = 3);
      case 4:
        src[1]--, (mycase = 4);
    }
    const goBack = (backCase) => {
      switch (backCase) {
        case 1:
          src[0]++;
        case 2:
          src[1]--;
        case 3:
          src[0]--;
        case 4:
          src[1]++;
      }
    };
    if (room[src[0]][src[1]] === 1) {
      goBack(mycase);
      return false;
    }
    return true;
  };
  const changeDir = () => {
    if(sDir === 4) sDir = 1
    else sDir++
  }
  const moveRobot = () => {
    if(src[0] === dst[0] && src[1] === dst[1] && sDir === dDir) {
      return count;
    }
    goStraight(sDir)
    if(goStraight(sDir) === false) {
      changeDir()
      count++
    }
  }
};

/*
let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 11
src: 시작지점
dst: 도착지점
sDir: 시작방향
dDir: 도착방향
위, 오른쪽, 아래, 왼쪽: 1,2,3,4
1. 시작 - (3, 0)에서 아래 방향을 향한 상태
장애물은 x로 표시, 출발지점은 s로 표시
[
  [0, 0, 0, 0],
  [0, x, x, 0],
  [0, x, d, 0],
  [s, 0, x, x],
] 

2. 로봇은 아래 방향을 향하고 있음 
  3인 이유: 위로 가기 위해서는 90도 회전이 2번, 직진 1번 필요함. 직진 한번으로 도달할 수 있는 모든 칸을 표기. 
  2인 이유: 오른쪽으로 가기 위해서는 90도 회전 1번, 직진 1번이 필요함
[
  [3, 0, 0, 0],
  [3, x, x, 0],
  [3, x, d, 0],
  [s, 2, x, x],
] 

3. (0, 0) 지점에서 로봇은 위 방향을 향하고 있음 
  5인 이유: 오른쪽으로 가기 위해서는 90도 회전이 1번, 직진 1번 필요함.
  1인 이유: 직진 1번으로 충분
[
  [3, 5, 5, 5],
  [3, x, x, 0],
  [3, x, d, 0],
  [s, 2, x, x],
] 

4. 비슷한 방식으로 계산하면 최종적으로 방향 전환까지 11번이 나오게 된다.
room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, d, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, s, 0, 0, 0],
];
src = [4, 2];
sDir = 1;
dst = [2, 2];
dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 7
*/
