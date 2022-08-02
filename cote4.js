/*
1, 2, 3으로만 이루어진 수열 바코드를 만들던 코드스테이츠는 물건의 가짓수가 늘어나자,
기존과는 다른 새로운 수열 바코드를 만드는 알고리즘을 다시 만들고자 합니다.
1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열이어야 하고,
길이가 M이어야 한다고 할 때,
만들 수 있는 바코드를 전부 배열에 담아 반환하는 함수를 작성하세요.
*/
function test2(n, m) {
  const visited = new Array(n).fill(false);
  let result = [];
  const arr = [];
  const dfs = (len) => {
    if (len === m) {
      result.push(Number(arr.join("")));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        arr.push(i + 1);
        dfs(len + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  };
  dfs(0, 0);
  return result;
}

// 모든 바코드는 같은 숫자가 있으면 안 됩니다.

// N이 2이고 M이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
const output1 = test2(2, 1);
console.log(output1); // --> [1, 2]

// N이 3이고 M이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
const output2 = test2(3, 2);
console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// N이 3고 M이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]
