// function newChickenRecipe(stuffArr, choiceNum) {

// }


function newChickenRecipe(stuffArr, choiceNum) {
  let freshArr = [];
  
  for (let i = 0; i < stuffArr.length; i++) {
    const element = String(stuffArr[i])
    .split('')
    .filter((e) => e === '0');
    if (element.length <= 2) {
      freshArr.push(stuffArr[i]);
    }
  }
  
  freshArr.sort((a, b) => a - b);
  
  if (freshArr.length === 0 || freshArr.length < choiceNum) return [];
  
  let result = [];
  
  const permutation = (arr, bucket, n) => {
    console.log(arr);
    if (n === 0) {
      result.push(bucket);
      return;
    }
    
    for (let i = 0; i < arr.length; i++) {
      const choice = arr[i];
      const sliceArr = arr.slice();
      sliceArr.splice(i, 1);
      permutation(sliceArr, bucket.concat(choice), n - 1);
    }
  };
  
  permutation(freshArr, [], choiceNum);
  
  return result;
}

const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);

console.log(output1);
/*
  [
    [1, 10], [1, 1100], 
    [1, 1111],[10, 1],
    [10, 1100], [10, 1111],
    [1100, 1], [1100, 10],
    [1100, 1111],[1111, 1], 
    [1111, 10], [1111, 1100]
  ];
*/