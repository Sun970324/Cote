function lonelyinteger(a) {
  // Write your code here
  const arr = new Array(a.length).fill(true)
  for(let i = 0; i < a.length; i++) {
    for(let j = i+1; j < a.length; j++) {
      if(a[i] === a[j]) {
        arr[j] = false
        arr[i] = false
      }
    }
  }
  for(let i=0; i < arr.length; i++) {
    if(arr[i] === true) {
      return a[i]
    }
  }
}

const a = [1,2,3,4,3,2,1]
console.log(lonelyinteger(a))