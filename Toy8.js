//largestProductOfThree
//정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  //음수처리?
  //가장 큰 수 3개 경우의 수
  // 큰 양수 3개, 음수 2개와 큰 양수 1개 비교
  // 가장 큰 수가 되는 경우의 수는, 양수 3개를 곱하거나(1), 음수 2개와 양수 1개를 곱하는 경우(2).
  //arr을 정렬하고 (1)과 (2)를 비교하여 리턴.
  const newArr = arr.sort((a,b)=> a-b)
  console.log(newArr);
  const len = arr.length
  const negative = newArr[0]*newArr[1]*newArr[len-1] //음수 2개 가장 큰 양수 1개
  const positive = newArr[len-1] * newArr[len-2] * newArr[len-3] //큰 양수 3개
  return Math.max(negative, positive)
};
console.log(largestProductOfThree([-5, -4, -3, -1, 999, 10000]));