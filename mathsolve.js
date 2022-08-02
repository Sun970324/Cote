function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person1Length = person1.length;
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person2Length = person2.length;
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const person3Length = person3.length;

  let person1Count = 0;
  let person2Count = 0;
  let person3Count = 0;
  answers.forEach((answer, index) => {
    if (answer === person1[index % person1Length]) person1Count++;
    if (answer === person2[index % person2Length]) person2Count++;
    if (answer === person3[index % person3Length]) person3Count++;
  });
  let result = []
  const maxCount = Math.max(...[person1Count, person2Count, person3Count]);
  if(maxCount === person1Count) result.push(1)
  if(maxCount === person2Count) result.push(2)
  if(maxCount === person3Count) result.push(3)
  return result;
}
console.log(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]));