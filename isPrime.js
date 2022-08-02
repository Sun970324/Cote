function solution(numbers) {
  var answer = 0;
  let splitNum = numbers.split("");
  let combi = []
  for(let i=0; i < splitNum.length; i++) {
    combi.push(splitNum[i])

  }
}
const isPrime = (num) => {
  if (num <= 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num}는 소수가 아닙니다.`;
    }
  }
  return `${num}는 소수입니다.`;
};

const test = "0" + "1" + "1";
// console.log(isPrime(Number(test)));
// console.log('011');
console.log(solution('011'));