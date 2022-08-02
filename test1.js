function test1() {
  // TODO: 여기에 코드를 작성하세요.
  let memo = [0,1]
  let num = 0
  return () => {
    if(num === 0) {
      num++ 
      return 0
      }
    if(num === 1) {
      num++
      return 1}
    memo.push(memo[num-1]+memo[num-2])
    num++
    return memo[memo.length-1]
  }
}
const fn = test1()