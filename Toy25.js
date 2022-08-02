// 세로와 가로의 길이가 각각 M, N인 방의 지도가 2차원 배열로 주어졌을 때, 1은 장애물을 의미하고 0 이동이 가능한 통로를 의미합니다. 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동할 수 있습니다. 로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴해야 합니다.

// 입력

// 인자 1 : room
// 배열을 요소로 갖는 배열
// room.length는 M
// room[i]는 number 타입을 요소로 갖는 배열
// room[i].length는 N
// room[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미
// room[i][j]는 0 또는 1

// 인자 2 : src
// number 타입을 요소로 갖는 배열
// src.length는 2
// src[i]는 0 이상의 정수
// src의 요소는 차례대로 좌표평면 위의 y좌표, x좌표

// 인자 3 : dst
// number 타입을 요소로 갖는 배열
// dst.length는 2
// dst[i]는 0 이상의 정수
// dst의 요소는 차례대로 좌표평면 위의 y좌표, x좌표

// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// M, N은 20 이하의 자연수입니다.
// src, dst는 항상 로봇이 지나갈 수 있는 통로입니다.
// src에서 dst로 가는 경로가 항상 존재합니다.

//src가 dst까지 가는데 0만 지나가야함.
//백트래킹?
const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const up = (locate) => locate[0]--;
  const down = (locate) => locate[0]++;
  const left = (locate) => locate[1]--;
  const right = (locate) => locate[1]++;
  const resultList = [];
  const N = room.length - 1;
  const M = room[0].length - 1;
  const moving = (count, locate) => {
    if (locate[0] === dst[0] && locate[1] === dst[1]) {
      resultList.push(count);
      return;
    }
    if (room[locate[0]][locate[1]] === 1) {
      return;
    } else { 
      if(locate[0] === N|| locate[1] === M || locate[0] <=0 || locate[1] <=0) {
        return
      }else {
        room[locate[0]][locate[1]] = 1
        moving(count+1, up(locate))
        moving(count+1, down(locate))
        moving(count+1, left(locate))
        moving(count+1, right(locate))
      }
    }
  };
  moving(0, src);
  return Math.min(...resultList);
};

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
