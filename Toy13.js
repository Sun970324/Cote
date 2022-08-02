/*
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
삽입정렬 구현하기
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
삽입 정렬은 두 번째 자료부터 시작하여
그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후
자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘이다.
즉, 두 번째 자료는 첫 번째 자료,
세 번째 자료는 두 번째와 첫 번째 자료,
네 번째 자료는 세 번째, 두 번째,
첫 번째 자료와 비교한 후 자료가 삽입될 위치를 찾는다.
자료가 삽입될 위치를 찾았다면 그 위치에 자료를 삽입하기 위해 자료를 한 칸씩 뒤로 이동시킨다.
*/
/*
[1, 2, 43, 100, 21] 두번째 요소부터 시작 
-> 2,1을 비교 2가 더 크기 때문에 넘어감. if(arr[i]> arr[i-1]) return;
[1, 2, 43, 100, 21] 세번째 요소 -> 43,2를 비교 43이 더 크기 때문에 넘어김
[1, 2, 43, 100, 21] 네번째 요소 -> 100,43을 비교 100이 더 크기 때문에 넘어감
[1,2,43,100,21] 다섯번째 요소 -> 100,21을 비교 : 21이 더 작음 두 요소의 위치를 바꿈
[1,2,43,21,100] 위치가 바뀐 배열에서 네번째 요소와 세번째 요소를 비교해야함.
43,21을 비교 -> 두 요소의 위치를 바꿈.
[1,2,21,43,100] -> 위치가 바뀐 배열에서 세번째 요소와 두번째 요소를 비교함
21,2를 비교 -> 21이 더 크기때문에 넘어감.
재귀,
종료조건: 배열의 모든 요소를 탐색. if()
재귀조건 :두 요소의 위치가 바뀜
*/

// const insertionSort = function (arr) {
//   let idx = 1;
//   let count = 1
//   const recursion = (arr, idx) => {
//     console.log(arr);
//     console.log(idx);
//     if (idx === arr.length) {
//       console.log("종료조건");
//       return arr;
//     }
//     if (arr[idx] > arr[idx - 1]) {
//       console.log("if");
//       recursion(arr, idx + 1);
//     } else if (arr[idx] < arr[idx - 1]) {
//       console.log("else if");
//       let tmp = arr[idx];
//       arr[idx] = arr[idx - 1];
//       arr[idx - 1] = tmp;
//       if (idx === 1) {
//         recursion(arr, count + 1);
//       } else {
//         recursion(arr, idx - 1);
//       }
//     }
//     count++
//   };
//   recursion(arr, idx);
//   return arr;
// };

// const insertionSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`i: ${i}`);
//     index = i;
//     while (arr[index] !== undefined && arr[index] < arr[index - 1]) {
//       console.log(`index: ${index}`);
//       let tmp = arr[index];
//       arr[index] = arr[index - 1];
//       arr[index - 1] = tmp;
//       index--;
//       console.log(`arr: [${arr}]`);
//     }
//   }
//   return arr;
// };

const insertionSort = function (arr,callback) {
  if(callback){
    for (let i = 0; i < arr.length; i++) {
      index = i;
      while (callback(arr[index]) !== undefined && callback(arr[index - 1]) > callback(arr[index])) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
        index--;
      }
    }
   return arr
   } else{
   for (let i = 0; i < arr.length; i++) {
      index = i;
      while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
        index--;
      }
    }
   return arr
   }
  };
console.log(insertionSort([5, 4, 3, 2, 1]));
