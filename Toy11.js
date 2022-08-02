const powerSet = function (str) {
  // 정렬
  const sorted = str.split("").sort();
  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });
  console.log(deduplicated);
  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, "");

  return subSets
};

//--------------------------------------------------------

const getSubsets = function (arr) {
  if(typeof arr === 'string') {
    arr = arr.split("")
    arr = arr.reduce((acc, cur) => {
      if(arr[acc.length-1] === cur) {
        return acc
      }else {
        return acc.concat(cur)
      }
    })
  }
  let flag = new Array(arr.length).fill(false); //[false,false,false]
  const subSets = [];

  const subSet = (depth) => { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === arr.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
      const subSet = arr.filter((el, index) => flag[index]); // 해당 flag true => 부분집합 포함
      subSets.push(subSet); // 부분집합들을 담는 배열에 push
      return;
    }

    flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽 [true,false,false]
    subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

    flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
    subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
  }
  
  subSet(0); // depth 0 부터 시작
  return subSets;
}

// const example = [1,2,3];
// const result = getSubsets('jjang');
// console.log(result);

///------------------------------------
const myFn = (str) => {
  let sorted = str.split("").sort()
  const deduplicated = sorted.reduce((acc, cur) => {
    if(acc[acc.length-1] === cur) {
      return acc
    }else {
      return acc.concat(cur)
    }
  }).split("")
  let flag = new Array(deduplicated.length).fill(false)
  let subSet = []
  const BFS = (depth) => {
    if(depth === flag.length) {
      const part = deduplicated.filter((el,idx) => flag[idx]) //flag[idx]가 true인 것만
      subSet.push(part)
      return
    }

    flag[depth] = true
    BFS(depth+1)

    flag[depth] = false
    BFS(depth+1)
  }
  BFS(0)
  return subSet
}

console.log(myFn('bbaaa'));
// [ab,a,b,'']