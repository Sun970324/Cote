//Quick Sort
//정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// const quickSort = function (arr) {
// TODO: 여기에 코드를 작성합니다.
//퀵정렬 -> pivot값 하나를 지정해서 pivot보다 큰 수들을 오른쪽으로 작은 수들을 왼쪽으로 보냄
// 오른쪽과 왼쪽에 있는 요소들 중 하나를 각각 pivot으로 지정해주고
//각각 pivot보다 작으면 왼쪽 크면 오른쪽
//반복.
// };

const quickSort = function (arr, callback = (el) => el) {
  // TODO: 여기에 코드를 작성합니다.
  //퀵정렬 -> pivot값 하나를 지정해서 pivot보다 큰 수들을 오른쪽으로 작은 수들을 왼쪽으로 보냄
  // 오른쪽과 왼쪽에 있는 요소들 중 하나를 각각 pivot으로 지정해주고
  //각각 pivot보다 작으면 왼쪽 크면 오른쪽
  //반복.
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (callback(arr[i]) <= callback(pivot)) left.push(arr[i]);
      else right.push(arr[i]);
    }

    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
};

console.log(quickSort([20, -10, -11, 2, 29]));
