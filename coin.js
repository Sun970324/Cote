function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let coin = 0;
  while (k > 0) {
    if (k >= 500) k = k - 500;
    else if (k >= 100) k = k - 100;
    else if (k >= 50) k = k - 50;
    else if (k >= 10) k = k - 10;
    else if (k >= 5) k = k - 5;
    else k = k - 1;
    coin++;
  }
  return coin;
}

console.log(partTimeJob(4321));
