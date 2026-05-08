// https://school.programmers.co.kr/learn/courses/30/lessons/86971

class Node {
  constructor(num) {
    this.value = num;
    this.neighbors = [];
  }
  addNeighbor(node) {
    this.neighbors.push(node);
  }
}
function solution(n, wires) {
  const nodes = Array(n)
    .fill(1)
    .map((_, ind) => new Node(ind));
  const visited = Array(n).fill(false);
  const sizes = Array(n).fill(1);

  wires
    .map(([i, j]) => [i - 1, j - 1])
    .forEach(([i, j]) => {
      nodes[i].addNeighbor(nodes[j]);
      nodes[j].addNeighbor(nodes[i]);
    });

  const dfs = (now) => {
    if (visited[now]) {
      return 0;
    }
    visited[now] = true;
    sizes[now] += nodes[now].neighbors
      .map((node) => dfs(node.value))
      .reduce((p, c) => p + c);
    return sizes[now];
  };

  dfs(0);

  return Math.min(...sizes.map((size) => Math.abs(2 * size - n)));
}

// 다른 사람 풀이
function solution(n, wires) {
  const g = Array.from({ length: n }, () => []);
  for (const e of wires) {
    g[e[0] - 1].push(e[1] - 1);
    g[e[1] - 1].push(e[0] - 1);
  }
  const p = new Array(n).fill(-1);
  const q = [0];
  for (let i = 0; i < q.length; ++i) {
    const u = q[i];
    for (const v of g[u])
      if (v != p[u]) {
        p[v] = u;
        q.push(v);
      }
  }
  let ans = n;
  const dp = new Array(n).fill(1);
  for (let i = q.length; --i > 0; ) {
    const v = q[i];
    dp[p[v]] += dp[v];
    let a = Math.abs(n - 2 * dp[v]);
    if (ans > a) ans = a;
  }
  return ans;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ]),
); // 3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
  0,
); // 0
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ]),
  1,
); // 1
