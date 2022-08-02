//LIS: 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열(Longest Increasing Subsequence)
/*
const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  const recursion = (arr) => {
    if(arr.length === 0) return
    if(result.length ===0 || result[result.length-1] < arr[0]) {
      console.log(result);
      result.push(arr.shift())
    }else {
      arr.shift()
    }
    recursion(arr)
  }
  recursion(arr)
  return result.length
};

*/
const LIS = function (arr) {
  const result = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && result[i] < result[j] + 1) {
        result[i] = result[j] + 1;
      }
    }
  }
  return Math.max(...result);
};
// let output = LIS([3, 2]);
// console.log(output); // --> 1 (3 or 2)

output = LIS([3, 10, 2, 1, 20]);
console.log(output); // --> 3 (3, 10, 20)
