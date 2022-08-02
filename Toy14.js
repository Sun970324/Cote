/*
부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
입출력 예시
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
이진탐색, 처음 검색만
arr[harf]가 target보다 높으면 오른쪽 부분 rotated[harf] < target => arr.slice(harf+1)
arr[harf]가 target보다 낮으면 왼쪽 rotated[harf] > target => arr.slice(0,harf)
그 후엔 이진탐색 arr[harf] < target => arr.slice(0,harf)
arr[harf] > target => arr.slice(harf+1)
*/

//[4, 5, 6, 0, 1, 2, 3], 2

// const rotatedArraySearch = function (rotated, target) {
//   let left = 0,
//   right = rotated.length - 1;

// while (left <= right) {
//   let middle = parseInt((right + left) / 2);
//   if (rotated[middle] === target) {
//     return middle;
//   }

//   if (rotated[left] < rotated[middle]) {
//     // 왼쪽 절반이 정렬되어 있는 상태
//     if (target < rotated[middle] && rotated[left] <= target) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   } else {
//     // 오른쪽 절반이 정렬되어 있는 상태
//     if (target <= rotated[right] && rotated[middle] < target) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
// }
// return -1;
// }

const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 이진탐색, 처음 검색만
  // arr[harf]가 target보다 높으면 오른쪽 부분 rotated[harf] < target => arr.slice(harf+1)
  // arr[harf]가 target보다 낮으면 왼쪽 rotated[harf] > target => arr.slice(0,harf)
  // 그 후엔 이진탐색 arr[harf] < target => arr.slice(0,harf)
  // arr[harf] > target => arr.slice(harf+1)
  let first = 0;
  let last = rotated.length - 1;
  let half = parseInt((first + last) / 2); //3
  // if (rotated[half] > target) {
  //   console.log("오른쪽 정렬");
  //   first = half + 1;
  // } else if(rotated[half] < target) {
  //   console.log("왼쪽 정렬");
  //   last = half - 1; //2
  // }
  while (first <= last) {
    console.log(`first: ${first}`);
    console.log(`last: ${last}`);
    half = parseInt((first + last) / 2); //0+2 = half 1
    console.log(`half: ${half}`);
    if (rotated[half] === target) {
      return half;
    }
    if (rotated[half] < target) {
      first = half + 1;
    } else {
      last = half - 1;
    }
  }
  return -1;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5));
