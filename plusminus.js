function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      negative++;
    }
  }
  const firstLine = (positive / arr.length).toFixed(6);
  const secondLine = (negative / arr.length).toFixed(6);
  const lastLine = (zero / arr.length).toFixed(6);
  console.log(firstLine);
  console.log(secondLine);
  console.log(lastLine);
}
plusMinus([-4, 3, -9, 0, 4, 1])
