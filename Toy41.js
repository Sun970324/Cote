/*
세로와 가로의 길이가 각각 R, M인 2차원 R X M 배열 grid가 주어졌을 때, '1'은 땅을 의미하고 '0' 은 물을 의미합니다.
주어진 2차원 배열에 존재하는 섬의 개수를 리턴해야 합니다.
*/
const countIslands = function (grid) {
  const HEIGHT = grid.length;
  const WIDTH = HEIGHT && grid[0].length;
  let count = 0;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (grid[row][col] === '0') continue;
      count++;
      searchIsland(row, col);
    }
  }

  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
    if (grid[row][col] === '0') return;

    grid[row][col] = '0';
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};