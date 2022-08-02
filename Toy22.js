//2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

const rotateMatrix = function (matrix, rotation) {
  // TODO: 여기에 코드를 작성합니다.
  //

  // for(let i=0; i < matrix.length; i++) {
  //   result.push(Array(matrix.length).fill(0))
  // }
  rotation = rotation%4
  let result = []
  const recursion = (matrix, rotation) => {
    console.log(rotation);
    if(rotation === 1) {
      return result
    }
  for(let i=0; i < matrix[0].length; i++) {
    let arr = []
    for(let j=0; j < matrix.length; j++) {
      arr.unshift(matrix[j][i])
    }
    result.push(arr)
  }
  recursion(result, rotation -1)
}
return recursion(matrix, rotation)
};

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
/*
[13, 9, 5, 1]
[14, 10, 6, 2]
[15, 11, 7, 3]
[16, 12, 8, 4]
*/
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(rotateMatrix(input, 102));
/*

[9, 5, 1]
[10, 6, 2]
[11, 7, 3]
[12, 8, 4]

console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8
*/

// matrix[i][j]
// [0][j] => [i][3]
// [1][j] => [i][2]
// [2][j] => [i][1]
// [3][j] => [i][0]
/*
const rotateMatrix = function (matrix, rotateNum = 1) {
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  if (rotateNum === 0) return matrix;

  const rotated = [];
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let i = 0; i < RC[0]; i++) {
    rotated[i] = [];
    for (let j = 0; j < RC[1]; j++) {
      if (rotateNum === 1) rotated[i][j] = matrix[N - j - 1][i];
      else if (rotateNum === 2)
        rotated[i][j] = matrix[N - i - 1][M - j - 1];
      else rotated[i][j] = matrix[j][M - i - 1];
    }
  }

  return rotated;
};
*/