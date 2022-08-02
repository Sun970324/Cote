//primePassword
//두 수 사이의 소수의 개수를 구하라

// const primePassword = (curPwd, newPwd) => {
//   // TODO: 여기에 코드를 작성합니다.
//   //소수찾기. 짝수 제외, i보다 작은 수를 나눴을 때 나머지가 0이면 false
//   //3733, 8779
//   let count = 0
//   for(let i=curPwd; i<=newPwd; i=i+2) {
//     for(let j=i-2; j >= 0; j=j-2) {
//       if(j === 1) {
//         console.log(`소수: ${i}`);
//         count = count+1
//         break;
//       }
//       if(i%j === 0) {
//         console.log(`i: ${i}, j: ${j}`);
//         break;
//       }
//     }
//   }
//   return count
// };
//소수 판별하는 함수
const isPrime = (num) => {
  if (num % 2 === 0) return false; //짝수면 false
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false; // divider로 나눠지면 false
    }
  }
  return true; //소수면 true
};

// 4자리 수를 받아서 각 자리수의 수들의 배열로 변환하는 함수
//  let output = splitNum(3359);
//  console.log(output); // --> [3, 3, 5, 9]
const splitNum = (num) => {
  const digits = num.toString().split(''); //['3','3','5','9']
  return digits.map((d) => Number(d)); // [3,3,5,9]
};

// 길이의 4의 수 배열을 받아서, 4자리의 수로 변환하는 함수
//  let output = splitNum([3, 3, 5, 9]);
//  console.log(output); // --> 3359
const joinDigits = (digits) => Number(digits.join(''));

const primePassword = (curPwd, newPwd) => {
  if (curPwd === newPwd) return 0;
  // bfs를 위해 queue를 선언
  let front = 0;
  let rear = 0;
  const queue = [];
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++; //queue에 숫자를 넣는다.
  };
  const deQueue = (queue) => {
    return queue[front++];
    // const item = queue[front];
    // front++;
    // return item;
  };

  // 각 4자리의 방문 여부를 저장하는 배열
  // 한 번 방문한 수(가장 최소의 동작으로 만든 수)는 다시 방문할 필요가 없다.
  const isVisited = Array(10000).fill(false); // [false*10000]
  isVisited[curPwd] = true; //isVisited[3733] = true
  // bfs를 위한 시작점
  // 큐에는 [필요한 동작 수, 비밀번호]가 저장된다.
  enQueue(queue, [0, curPwd]); // queue=[[0, 3733]]
  // bfs는 큐가 빌(empty) 때까지 탐색한다.
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue); //0, 3733
    // 각 자리수 마다 변경이 가능하므로 4번의 반복이 필요하다.
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num); // [3,7,3,3]
      // 0부터 9까지 시도한다.
      for (let d = 0; d < 10; d++) { //0
        // 각 자리수마다 원래 있던 수(digits[i])는 피해야 한다.
        if (d !== digits[i]) { // d=0, digits[0] = 3
          // 현재 자리수의 수를 변경하고,
          digits[i] = d; // digits[0] = 0
          // 변경한 후 4자리 수를 구한다.
          const next = joinDigits(digits); //6733
          // 만약 이 수가 새 비밀번호와 같다면 리턴한다.
          // next는 deQueue된 num으로부터 1단계 다음에 도달한 수이다.
          if (next === newPwd) return step + 1;
          // 1,000보다 큰 소수여야 하고, 방문된 적이 없어야 한다.
          if (next > 1000 && isPrime(next) && isVisited[next] === false) {
            // 방문 여부를 표시하고,
            isVisited[next] = true;
            // 큐에 넣는다.
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }

  // 큐가 빌 때까지, 즉 모든 경우의 수를 탐색할 때까지 리턴되지 않은 경우
  // 현재 비밀번호에서 새 비밀번호를 만들 수 없다.
  return -1;
};
console.log(primePassword(3733,3779)); 