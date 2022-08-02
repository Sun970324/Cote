//power 두 수를 입력받아 거듭제곱을 리턴하라
//base에 exponent만큼 거듭제곱

// function power(base, exponent) {
//   // todo: 여기에 코드를 작성합니다.
//   let result = 1
//   const divide = 94906249
//  while(exponent > 0) {
//    console.log('함수실행');
//    result = result *base

//    if(result > divide) {
//      result = result%divide
//    }
//    exponent --
//  }
//  return result
// }

function power(base, exponent) {
  console.log("함수실행");
  if (exponent === 0) return 1;
  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  console.log(`half: ${half}, temp: ${temp}, result: ${result}`);

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

console.log(power(2, 100));
//half = 0 => return 1
//half = 1 => base: 2 temp: 1 result: 1*1 => return 2
//half = 2 => base: 2 temp: 2 result: 2*2 => return 4
//half = 5 => base: 2 temp: 4 result: 4*4 => return 2 * 16: => 32
