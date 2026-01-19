// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {
  let start, lever, end;

  maps.forEach((row, rowIndex) => {
    if (row.includes("S")) start = [rowIndex, row.indexOf("S")];
    if (row.includes("L")) lever = [rowIndex, row.indexOf("L")];
    if (row.includes("E")) end = [rowIndex, row.indexOf("E")];
  });

  function bfs(start, destination) {
    const queue = [[...start, 0]];
    const visited = Array.from({ length: maps.length }, () =>
      Array(maps[0].length).fill(false)
    );
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (x === destination[0] && y === destination[1]) return dist;

      for (const [dx, dy] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1;
  }

  const toLever = bfs(start, lever);
  const toExit = bfs(lever, end);

  if (toLever === -1 || toExit === -1) return -1;
  return toLever + toExit;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])); // 16
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); // -1
