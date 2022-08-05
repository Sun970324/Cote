function diagonalDifference(arr) {
  // Write your code here
  let leftToRight = 0
  let RightToLeft = 0
  let length = arr.length-1
  for(let i=0; i< arr.length; i++) {
    leftToRight = leftToRight+arr[i][i]
    RightToLeft = RightToLeft+ arr[i][length]
    length = length-1
  }
  return Math.abs(leftToRight - RightToLeft)
}
