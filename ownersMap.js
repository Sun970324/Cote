function solution(codeOwnersMap, directory) {
    let result
  const findOwner = (obj) => {
    if (Array.isArray(obj)) {
      return obj
    }
    for (let key in obj) {
      if (key === directory) {
        result =  obj[key];
      } else if (typeof obj[key] === "object" && obj[key] !== null && Array.isArray(obj[key]) === false) {
        findOwner(obj[key]);
      }
    }
  };
   findOwner(codeOwnersMap)
  return result
}

const codeOwnerMap = {
  script: ["배수진"],
  services: {
    "business-ledger": ["고찬균", "배수진"],
    "toss-card": ["채주민", "유재섭"],
    payments: {
        test1:["윤선웅"],
        test2:["테스트2"]
    }
  },
};
console.log(solution(codeOwnerMap, "toss-card"));
