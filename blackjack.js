function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (isPrime(sum)) count++;
      }
    }
  }

  function isPrime(num) {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return count;
}

//카드 중 3장을 합한 수의 조합을 모두 만들어서
// 그 수가 소수인지 아닌지 판별.
let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1
