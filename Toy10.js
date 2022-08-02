//binarySearch
//오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  //반으로 나눠서 비교
  //재귀?
  const recursion = (start, end) => {
    const half = parseInt((start + end) / 2);
    if (start === end) return arr[start] !== target ? -1 : end;
    else if (arr[half] < target) return recursion(half + 1, end);
    else return recursion(start, half);
  };
  return recursion(0, arr.length);
};

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2));
