//Bubble Sort
const bubbleSort = function (arr) {
  for(let i = 1; i < arr.length; i++) {
    let idx = i
    while(arr[idx-1]&& arr[idx] < arr[idx-1]) {
      let tmp = arr[idx]
      arr[idx] = arr[idx-1]
      arr[idx-1] = tmp
      idx--
    }
  }
  return arr
};
console.log(bubbleSort([2,1,3]));