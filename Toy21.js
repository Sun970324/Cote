// const inequalityNumber = function (signs) {
//   // TODO: 여기에 코드를 작성합니다.
//   //signs의 개수 + 한자리수 더하면 signs의 개수
//   //sings의 길이가 1일 때, 2자리수 비교
//   //signs의 길이가 2일 때, 3자리수 비교 ...
//   //직전 숫자하고만 비교하기.
//   //백트래킹?
//   //좌우에 같은 값이 들어가면 안됨.
// };

//최소값이 되기 위한 조건: 9부터 0까지 내려가며 비교한다.
//최대값이 되기 위한 조건: 0부터 9까지 올라가며 비교한다.
//1. signs의 개수 + 1 만큼 0으로 된 배열을 만들어줌 signs가 1이면 [0,0], 2이면 [0,0,0], 3이면 [0,0,0,0]
//2. 배열의 첫번째 숫자를 두번째 숫자와 비교한다.
//3. 0부터 9까지 비교하여 두번째 숫자와 비교 signs를 만족하는 숫자를 넣는다.
//4. 각 자릿값에 false값을 부여한 배열을 만들어서 숫자를 넣으면 그 자릿값에 true로 바꾼다.
//5. 

//-----------------------------------------------------------------------------------------------
// const inequalityNumber = function (signs) {
//   const aux = (idx, signs, nums, digits, isVisited) => {
//     if (idx === signs.length) {
//       // 부등호 수를 만든 경우
//       return parseInt(nums.join(''));
//     }

//     const sign = signs[idx];
//     for (let i = 0; i < digits.length; i++) {
//       // 숫자를 차례대로 검토한다.
//       // max를 구할 때는 9부터, min을 구할 때는 0부터
//       const right = digits[i];
//       // 이전 단계에서 사용한 숫자인 경우 스킵
//       if (isVisited[right]) continue;

//       // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
//       if (idx >= 0) {
//         // 항상 바로 직전의 숫자와 비교하면 된다.
//         const left = nums[nums.length - 1];
//         if (sign === '<' && left >= right) continue;
//         if (sign === '>' && left <= right) continue;
//       }

//       // 조건을 만족하거나 첫번째 숫자인 경우
//       isVisited[right] = true;
//       const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
//       if (target !== undefined) {
//         // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
//         return target;
//       }
//       // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
//       isVisited[right] = false;
//     }

//     return undefined;
//   };

//   signs = signs.split(' ');
//   const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
//   const min = aux(-1, signs, [], digits, Array(10).fill(false));
//   const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
//   return max - min;
// };