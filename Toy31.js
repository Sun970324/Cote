//정수를 요소로 갖는 배열과 특정 구간을 입력받아, 해당 구간 내에서 최소값을 리턴해야 합니다.

const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  let min1 = Infinity
  let min2 = Infinity
  if(ranges[0][1] !== undefined && ranges[1][1] !== undefined){
  for(let i = ranges[0][0]; i < ranges[0][1]; i++) {
    if(min1 > arr[i]) min1 = arr[i]
  }
  for(let i = ranges[1][0]; i < ranges[1][1]; i++) {
    if(min2 > arr[i]) min2 = arr[i]
  }
}else if(ranges[0][1] === undefined && ranges[1][1] === undefined) {
  return [arr[ranges[0]], arr[ranges[1]]]
}else if(ranges[0][1] === undefined && ranges[1][1] !== undefined) {
  for(let i = ranges[1][0]; i < ranges[1][1]; i++) {
    if(min2 > arr[i]) min2 = arr[i]
  }
  min1 = arr[ranges[0]]
}else if(ranges[0][1] !== undefined && ranges[1][1] === undefined) {
  for(let i = ranges[0][0]; i < ranges[0][1]; i++) {
    if(min1 > arr[i]) min1 = arr[i]
  }
  min2 = arr[ranges[1]]
}
  return [min1, min2]
};
/*
const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [[1, 4],[0, 3],]);
console.log(mins); // --> [2, 1]
*/
