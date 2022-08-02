function test1(A, B) {
  // TODO: 여기에 코드를 작성하세요.
  const recursion = (a, b) => {
    if (b === 0) return a;
    else {
      return recursion(b, a % b);
    }
  };
  return recursion(A, B);
}

function test2(A, B) {
  let result = 0
  const bigger = Math.max(A,B)
  for(let i = 0; i <bigger; i++) {
    if(A%i ===0 && B%i === 0) result = i
  }
  return result
}

// 가로 20, 세로 8이 주어졌을 때, 최대 4의 길이를 가진 정사각형 타일을 가질 수 있습니다.
const output1 = test2(20, 8);
console.log(output1); // --> 4

// 가로 18, 세로 27이 주어졌을 때, 최대 9의 길이를 가진 정사각형 타일을 가질 수 있습니다.
const output2 = test2(18, 27);
console.log(output2); // --> 9