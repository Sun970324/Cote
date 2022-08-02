function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  const people = Math.min(M,N)
  let result = []
  for(let i=1; i <= people; i++) {
    if(Number.isInteger(M/i) && Number.isInteger(N/i)) {
      result.push([i,M/i,N/i])
    }
  }
  return result
}
let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
