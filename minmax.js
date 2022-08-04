function miniMaxSum(arr) {
  // Write your code here
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum = sum + arr[j];
      }
    }
    sumArr.push(sum);
  }
  console.log(Math.min(...sumArr), Math.max(...sumArr));
}
//[1,3,5,7,9] => 한개 요소를 뺀 가장 큰 합, 작은 합을 구하자

miniMaxSum([1, 2, 3, 4, 5]);
