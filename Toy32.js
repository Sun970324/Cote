const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
  //직사각형 구하기.
  let max = 0
  let len = histogram.length
  let square = 0
  for(let i = 0; i < histogram.length; i++) {
    if(histogram[i] > max) max = histogram[i]
  }
  /*
  arr[i]가 2 이상일 경우, 연속된 2 이상의 인덱스의 개수 * 2
  arr[i]가 3 이상일 경우, 연속된 3 이상의 인덱스의 개수 * 3
  arr[i]가 4 이상일 경우, 연속된 4 이상의 인덱스의 개수 * 4
  arr[i]....가 max 이상일 경우, 연속된 max 이상의 인덱스의 개수 * max 끝.
  */
 const getSquare = (num, arr) => {
  if(num === max) return;

  let idx = [] // 0 2 3 5 6
  for(let i=0; i < arr.length; i++) {
    if(arr[i] > num) {
      idx.push(i)
    }
  }

 }
};

/*
let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

let histogram = [6, 2, 5, 4, 5, 1, 6];
let output = largestRectangularArea(histogram);
console.log(output); // --> 12
*/