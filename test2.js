function test2(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  // bfs, queue
  const bfs = (root) => {
    console.log('재귀');
    let result = []
    for(let i =0; i< root.length; i++) {
      if(root[i].id === id) {
        console.log('리턴실행:' +root[i].id);
        // console.log(root[i]);
        result.push(root[i])
        return root[i]
      }
      if(root[i].children) {
        console.log('children 실행: ' + root[i].id);
        bfs(root[i].children)
      }
    }
    return result
  }
  return bfs(arr)
}

let input = [
  {
    id: 1,
    name: 'johnny',
  },
  {
    id: 2,
    name: 'ingi',
    children: [
      {
        id: 3,
        name: 'johnson',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: '13',
  },
];

console.log(test2(input, 6));