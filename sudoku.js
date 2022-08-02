const sudoku = function (board) {
  const N = board.length; // 9
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  const getBoxNum = (row, col) => boxes[row][col];

  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false));
    colUsed.push(Array(N + 1).fill(false));
    boxUsed.push(Array(N + 1).fill(false));
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }
  // console.log(blanks);
  // console.log(rowUsed);
  // console.log(colUsed);
  // console.log(boxUsed);
  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col); // 0
    return (
      rowUsed[row][num] === false && //0,2
      colUsed[col][num] === false && //0,2
      boxUsed[box][num] === false //0,2
    );
  };

  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col);
    board[row][col] = num;
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };

  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true;
    }

    const [row, col] = blanks[idx]; //blanks[0] = [0,0] row:0, col: 0
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        // 0,0,2
        toggleNum(row, col, num);
        if (aux(idx + 1, blanks, board) === true) {
          return true;
        }
        toggleNum(row, col, num);
      }
    }
    return false;
  };

  aux(0, blanks, board);
  return board;
};

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let board2 = [
  [2, 0, 3, 0, 5, 0, 1, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 7],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 0, 0, 8, 0, 0, 0, 0],
  [9, 0, 8, 0, 0, 7, 0, 0, 1],
  [0, 5, 0, 0, 0, 0, 9, 0, 0],
  [8, 0, 1, 0, 3, 0, 2, 0, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 3, 0],
];
console.log(sudoku(board2));

/*
[
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
]
blanks = [
  [ 0, 0 ], [ 0, 2 ], [ 0, 5 ], [ 0, 7 ],
  [ 1, 2 ], [ 1, 3 ], [ 1, 5 ], [ 1, 6 ],
  [ 1, 8 ], [ 2, 2 ], [ 2, 3 ], [ 2, 4 ],
  [ 2, 7 ], [ 2, 8 ], [ 3, 2 ], [ 3, 4 ],
  [ 3, 5 ], [ 3, 6 ], [ 3, 8 ], [ 4, 0 ],
  [ 4, 1 ], [ 4, 4 ], [ 4, 7 ], [ 4, 8 ],
  [ 5, 0 ], [ 5, 2 ], [ 5, 3 ], [ 5, 4 ],
  [ 5, 6 ], [ 6, 0 ], [ 6, 1 ], [ 6, 4 ],
  [ 6, 5 ], [ 6, 6 ], [ 7, 0 ], [ 7, 2 ],
  [ 7, 3 ], [ 7, 5 ], [ 7, 6 ], [ 8, 1 ],
  [ 8, 3 ], [ 8, 6 ], [ 8, 7 ], [ 8, 8 ]
]

rowUsed = [
  [ false, true,  true, true,  false, false, true,  true,  false, false],
  [ false, false, false, false, false, false, true,  true,  true, true],
  [ false, true,  false, false, true,  true, false, false, false, true ],
  [ false, true,  true, false, true,  false, false, false, true, false],
  [ false, false, true, false, true,  false, true,  false, false, true],
  [ false, false, true, true,  false, true, false, false, true, false],
  [ false, false, false, true,  true,  false, false, true,  false, true],
  [ false, false, false, true,  true,  true, true,  false, false, false],
  [ false, true,  false, true,  false, false, false, true,  true, false]]

colUsed = [
  [ false, true,  false, false, false, false, true,  true,  true, false],
  [ false, false, true, true,  true,  true, false, false, true, true],
  [ false, false, false, true,  true,  false, false, false, false, true],
  [ false, true,  true, true,  false, false, true,  false, false, false],
  [ false, true,  false, false, false, true, true,  true,  false, false],
  [ false, false, true, true,  true,  false, false, false, true, false],
  [ false, false, false, false, false, true, false, true,  false, true],
  [ false, false, true, true,  true,  false, false, true,  false, true],
  [ false, true,  false, false, true,  false, true,  false, true, false]
]

boxUsed = [
  [ false, true,  false, true,  false, false, true,  false, true, true],
  [ false, false, true, false, true,  false, true,  true,  false, false],
  [ false, true,  false, false, false, true, false, true,  false, true],
  [ false, false, true, false, true,  true, false, false, true, false],
  [ false, true,  true, true,  false, false, true,  false, false, false],
  [ false, false, true, false, true,  false, false, false, true, true],
  [ false, false, false, true,  true,  false, false, true,  false, true],
  [ false, true,  false, true,  false, true, false, false, true, false],
  [ false, false, false, true,  true,  false, true,  true,  false, false]
]
*/
