//정수를 요소로 갖는 배열을 입력받아 다음의 조건을 만족하는 LSCS*를 리턴해야 합니다.
//LSCS: 주어진 배열의 연속된 부분 배열*의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray)
//연속된 부분 배열들: 배열 [1,2,3]의 연속 부분 배열은 [1], [1, 2], [1, 2, 3], [2], [2, 3], [3] 입니다.

// const LSCS = function (arr) {
//   let max = Math.max(...arr); //가장 큰 한개짜리
//   const N = arr.length; //4
//   const recursion = (len) => {
//     if (len > N) return;

//     for (let i = 0; i <= N - len; i++) {
//       const el = arr.slice().splice(i, len);
//       console.log(el);
//       const sum = el.reduce((pre, cur) => {
//        return pre+cur
//       })
//       if(sum > max) max = sum
//     }
//     recursion(len+1)
//   };
//   recursion(1)
//   return max
// };

const LSCS = function (arr) {
  let max = -1000000
  let sum = 0
  for(let i =0; i < arr.length; i++) {
    sum = sum + arr[i]
    if(sum > max) max = sum
    if(sum < 0) sum = 0
  }
  return max
}

//(1), (1,2), (1,2,3), (2), (2,3), (3)
//한개짜리만 비교 후 가장 큰 수를 일단 max에 넣고 (1), (2), (3) ,(-4)
//두개짜리 비교 후 가장 큰 수와 max와 비교해서 더 큰 수를 넣음 (1,2), (2,3), (3,-4)
//세개짜리... (1,2,3), (2,3,-4)
//배열의 길이만큼...(1,2,3,-4)

// let output = LSCS([1, 2, 3]);
// console.log(output); // --> 6

// output = LSCS([1, 2, 3, -4]);
// console.log(output); // --> 6 ([1, 2, 3])

console.log(LSCS([1, 2, 3, -4, 5]));
// console.log(output); // --> 7 ([1, 2, 3, -4, 5])

// console.log(LSCS([10, -11, 11]))
// console.log(output); // --> 11 ([11])
