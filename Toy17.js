//balancedBrackets
//문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

// const balancedBrackets = function (str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let obj ={}
//   for(let i=0; i < str.length; i++) {
//     if(obj[str[i]] === undefined) {
//       obj[str[i]] = 1
//     }else {
//       obj[str[i]]++
//     }
//   }
//   console.log(obj);
//   if(obj['('] === obj[')'] && obj['['] === obj[']'] && obj['{'] === obj['}']){
//     return true
//   }else {
//     return false
//   }
// };

const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(balancedBrackets("(()())"));

// const balancedBrackets = function (str) {
//   if(str.length%2 === 1) return false

//   str = str.split('')
//   left = str.slice(0,str.length/2).reverse()
//   right = str.slice(str.length/2)
//   console.log(left);
//   console.log(right);
//   for(let i=0; i < left.length; i++) {
//     if(left[i] === '(' && right[i] === ')') {
//       continue
//     }else if(left[i] === '[' && right[i] === ']') {
//       continue
//     }else if(left[i] === '{' && right[i] === '}') {
//       continue
//     }else {
//       return false
//     }
//   }
//   return true
// }
