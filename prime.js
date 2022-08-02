/*
 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 */
/*
function solution(n) {
  var answer = 0;

  const isPrime = (num) => {
    if (num % 2 === 0) return false;

    let sqrt = parseInt(Math.sqrt(num));

    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}
*/

/*
 함수 solution은 정수 n을 매개변수로 입력받습니다.
 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/
function solution(n) {
  const stringN = String(n);
  let arr = [];

  for (let i = 0; i < stringN.length; i++) {
    arr.push(Number(stringN[i]));
  }

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }

    const lSorted = quickSort(left);
    const rSorted = quickSort(right);

    return [...rSorted, pivot, ...lSorted];
  };

  const sort = quickSort(arr);
  let result = "";

  for (let i = 0; i < sort.length; i++) {
    result = result + sort[i];
  }

  return Number(result);
}
console.log(solution(118372));
