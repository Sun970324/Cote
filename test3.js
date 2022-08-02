function test3(insertEdges, removeEdges) {
  // TODO: 여기에 코드를 작성하세요.
  const matrixLen = insertEdges.concat(removeEdges).flat();
  let max = 0;
  for (let i = 0; i < matrixLen.length; i++) {
    if (matrixLen[i] > max) {
      max = matrixLen[i];
    }
  }
  let matrix = [];
  for (let i = 0; i < max + 1; i++) {
    matrix.push(new Array(max + 1).fill(0));
  }
  const addEdge = (from, to) => {
    const currentLength = matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }
    //TODO: 간선을 추가해야 합니다.
    matrix[from][to] = 1;
    matrix[to][from] = 1;
  };
  
  const removeEdge = (from, to) => {
    const currentLength = matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    //TODO: 간선을 지울 수 없는 상황에서는 지우지 말아야 합니다.
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      to < 0 ||
      from < 0
    ) {
      return;
    }
    //TODO: 간선을 지워야 합니다.
    matrix[from][to] = 0;
    matrix[to][from] = 0;
  };
  for(let i = 0; i < insertEdges.length; i++) {
   addEdge(insertEdges[i][0], insertEdges[i][1])
  }
  for(let i=0; i < removeEdges.length; i++) {
    removeEdge(removeEdges[i][0], removeEdges[i][1])
  }
  return matrix
}
const insertEdges = [
  [0, 3],
  [0, 2],
  [1, 3],
  [2, 1],
];
const removeEdges = [
  [1, 3],
  [1, 0],
];
console.log(test3(insertEdges, removeEdges));