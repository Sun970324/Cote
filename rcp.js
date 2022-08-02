function rockPaperScissors(rounds) {
  // TODO: 여기에 코드를 작성합니다.
  // 3*3*3
  //000 001 002 010 011 012 020 021 022
  const rps = ["rock", "paper", "scissors"];
  let result = [];
  //rock - rock - rock
  const round = (count, arr) => {
    if (count === 0) {
      result.push(arr)
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      let pick = rps[i]
      round(count-1, arr.concat(pick))
    }
  };
  round(rounds, []);
  return result;
}

console.log(rockPaperScissors(3));

//----------------------------------------------------

// const rockPaperScissors = function (rounds) {
//   rounds = rounds || 3;
//   const rps = ["rock", "paper", "scissors"];

//   const outcomes = [];

//   let permutate = function (roundsToGo, playedSoFar) {
//     if (roundsToGo === 0) {
//       outcomes.push(playedSoFar);
//       return;
//     }

//     for (let i = 0; i < rps.length; i++) {
//       let currentPlay = rps[i];
//       permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
//     }
//   };

//   permutate(rounds, []);

//   return outcomes;
// };
