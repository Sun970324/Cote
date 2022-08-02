const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  let result = []
  const getCombi = function (arr, num) {
    const results = [];
    if (num === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, num - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });

    return results;
  };
  const combi1 = getCombi(str1);
  const combi2 = getCombi(str2);
  for(let i=0; i < combi1.length; i++) {
    for(let j=0; j < combi2.length; j++) {
      if(combi1[i] === combi2[j]) {
        result.push(combi1)
      }
    }
  }
  return result
};

/*
두 문자열을 입력받아 다음의 조건을 만족하는 LCS*의 길이를 리턴해야 합니다.

let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')

LCS: 두 문자열에 공통으로 존재하는 연속되지 않는 부분 문자열(Longest Common Subsequence)
문자열 'abc'의 subseqeunce는 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' 입니다.
*/
