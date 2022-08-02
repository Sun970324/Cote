/*
아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.
ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
1은 1번째 ugly number 이다.
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...
*/
/*
const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [1];
  let i = 2;
  while (result.length < n) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      result.push(i);
      console.log(result);
    }
    i++;
  }
  return result[result.length - 1];
};
*/
const uglyNumbers = function (n) {

  const uglyNumbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNumbers[n - 1];
};

console.log(uglyNumbers(15));
