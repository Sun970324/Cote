/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
return = [5, 6, 3]
*/
function solution(array, commands) {
  let result = [];

  function sliceArr(arr) {
    const [first, last, find] = arr;
    const copyArr = array.slice();
    let result = [];

    for (i = first; i <= last; i++) {
      result.push(copyArr[i - 1]);
    }

    result.sort((a, b) => a - b);
    return result[find - 1];
  }

  for (let i = 0; i < commands.length; i++) {
    result.push(sliceArr(commands[i]));
  }
  return result;
}
