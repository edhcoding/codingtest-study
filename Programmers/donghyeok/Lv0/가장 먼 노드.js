// https://school.programmers.co.kr/learn/courses/30/lessons/49189

// 문제: 가장 멀리 떨어진 노드의 갯수 (가장 멀리 떨어진 노드와는 최단경로로 이동했을때 간선의 갯수가 가장 많은 노드를 의미)
function solution(n, edge) {
  // 그래프 그리기 - 각 노드별로 연결된 노드 배열 저장
  const graph = Array.from({ length: n + 1 }, () => []); // Array(n + 1).fill(0).map(() => []) 이렇게 해도 됨.
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  // [ [], [ 3, 2 ], [ 3, 1 ], [ 6, 4, 2, 1 ], [ 3 ], [], [ 3 ] ]
  // 여기서 1번 인덱스인 1은 3이랑 2랑 연결되어있음.

  // 1번 노드에서 각 노드까지의 최단 거리 (-1은 미방문 노드)
  const dist = new Array(n + 1).fill(-1);
  dist[1] = 0; // 1번 부터 시작이라서 거리 0 -> // [-1, 0, -1, -1, -1, -1, -1];
  const queue = [1]; // BFS용 큐, 1번부터 탐색할거임.

  // BFS: 큐에 있는 노드를 꺼내서 해당 노드와 연결된 노드를 탐색하고, 탐색한 노드를 큐에 추가하고, 탐색한 노드의 거리를 갱신하는 방식으로 최단거리를 구함.
  while (queue.length > 0) {
    const cur = queue.shift(); // 현재노드 -> shift : 배열 맨 앞 요소 제거, 반환값은 해당 요소
    // 아직 방문하지 않은 노드라면 거리를 갱신하고 큐에 추가
    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  // 최단거리 중 가장 먼 거리
  // dist -> [-1, 0, 1, 1, 2, -1, 2];
  // slice(1) -> [0, 1, 1, 2, -1, 2]; 1부터 시작하는 이유는 1번 노드부터 시작하기 때문.
  // slice : slice는 배열의 일부를 잘라서 반환하는 메서드
  const maxDist = Math.max(...dist.slice(1));

  return dist.filter((d) => d === maxDist).length; // [2, 2] -> 2개
}

// 공부 (BFS, DFS 둘 다 그래프/트리에서 “방문 가능한 노드들을 순회”하는 기본 알고리즘)
// 1. DFS(Depth-First Search) - 모든 경우의 수 탐색
// - 깊이 우선 탐색, 깊이 우선 탐색은 깊은 곳을 우선으로 탐색하는 방법 (스택 사용)
// - 그래서 한 길로 깊게 들어갔다가 막히면 되돌아가서 다른 길로 탐색 방식
// - 모든 경우의 수 탐색(백 트래킹), 연결요소 탐색, 경로 존재 여부

// 2. BFS(Breadth-First Search) - 최단거리
// - 너비 우선 탐색, 너비 우선 탐색은 너비 우선으로 탐색하는 방법 (큐 사용)
// - 그래서 현재 위치에서 가까운 곳부터 넓게 퍼져 나가는 탐색 방식
// - 최단거리 구할때, 거리(레벨) 단위로 처리할 때(미로 최단 이동)
// 차이점: DFS는 깊이 우선으로 탐색하기 때문에 스택 사용, BFS는 너비 우선으로 탐색하기 때문에 큐 사용

// Array.from 사용 예시
// 1. Array.from([1, 2, 3], (x) => x + x) -> [2, 4, 6]
// 2. Array.from("foo"); -> [ "f", "o", "o" ] 문자열 배열로 변환
// 3. Set 객체를 배열로 변환
// const set = new Set(["foo", "bar", "baz", "foo"]);
// Array.from(set); -> [ "foo", "bar", "baz" ]
// 4. Map 객체를 배열로 변환
// const mapper = new Map([
//   ["1", "a"],
//   ["2", "b"],
// ]);
// Array.from(mapper); -> [ [ '1', 'a' ], [ '2', 'b' ] ]
// Array.from(mapper.values()); -> ['a', 'b'];
// Array.from(mapper.keys()); -> ['1', '2'];
// 5. NodeList 객체를 배열로 변환
// DOM 요소의 속성을 기반으로 배열 만들기
// const images = document.querySelectorAll("img");
// const sources = Array.from(images, (image) => image.src);
// const insecureSources = sources.filter((link) => link.startsWith("http://"));

// 다른 사람 풀이
function solution2(n, edges) {
  // 인접 리스트
  const adjList = edges.reduce((G, [from, to]) => {
    G[from] = (G[from] || []).concat(to);
    G[to] = (G[to] || []).concat(from);
    return G;
  }, {});

  // BFS 탐색
  const queue = [1];
  const visited = { 1: true };
  const dist = { 1: 0 };
  while (queue.length > 0) {
    const node = queue.shift();

    if (adjList[node]) {
      adjList[node].forEach((n) => {
        if (!visited[n]) {
          queue.push(n);
          visited[n] = true;
          const d = dist[node] + 1;
          if (dist[n] == undefined || d < dist[n]) {
            dist[n] = d;
          }
        }
      });
    }
  }

  const dists = Object.values(dist);
  const maxDist = Math.max(...dists);
  return dists.filter((d) => d == maxDist).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
  ]),
); // 2
