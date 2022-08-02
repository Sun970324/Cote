//정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//기수 정렬을 구현해야 합니다.
//기수 정렬(radix sort)은 내부적으로 계수 정렬(counting sort)을 사용합니다.

//기수 정렬: 1. 1의 자리수의 크기를 비교하여 배열로 정리한다. 2. 10의 자리수 크기를 비교하여 정렬한다. 3. 100의 자리수 크기를 비교하여 정렬한다.
//음수일 때, 자리값이 작은 것이 뒤로 가야함.
//양수일 때. 자리값이 큰 것이 뒤로 가야함.
function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  const maxLen = String(Math.max(...arr)).length; //가장 큰 수의 자리수를 구함. 이 값만큼 정렬을 반복함.

  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  let plus = []
  let minus = []
  for(let i=0; i < arr.length; i++) {
    if(arr[i] >=0) {
      plus.push(arr[i])
    }else {
      minus.push(arr[i]*(-1))
    }
  }
  function sort (arr) {
  for (let i = 0; i < maxLen; i++) {
    let queue = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      queue[digit].push(arr[j]);
    }
    arr = [].concat(...queue)
  }
  return arr;
}
return sort(minus).reverse().map((el) => el * (-1)).concat(sort(plus))
}

let output = radixSort( [20, -10, -11, 2, 29]);
console.log(output); // --> [1, 3, 21]
