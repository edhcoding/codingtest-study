// https://school.programmers.co.kr/learn/courses/30/lessons/87694

/**
 * 직사각형들이 겹쳐진 다각형 지형에서, 캐릭터가 테두리만 따라 아이템까지 가는 최단거리 구하기
 * - 좌표 2배 확장: ㄷ자 모양 등에서 대각선으로 잘못 지나가는 것 방지
 * - 테두리만 1로 표시하고 BFS로 최단거리 탐색
 */
function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 좌표 최대 50 → 2배 확장 시 100, 여유있게 102x102 그리드 생성
  const GRID_SIZE = 102;
  const grid = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(-1),
  );

  // 1단계: 모든 직사각형 영역을 1로 채우기
  for (const rect of rectangle) {
    const [x1, y1, x2, y2] = rect.map((v) => v * 2);
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        if (grid[x][y] !== 0) {
          grid[x][y] = 1;
        }
      }
    }
  }

  // 2단계: 각 직사각형의 내부(테두리 제외)를 0으로 바꿔서 테두리만 1로 남기기
  for (const rect of rectangle) {
    const [x1, y1, x2, y2] = rect.map((v) => v * 2);
    for (let x = x1 + 1; x < x2; x++) {
      for (let y = y1 + 1; y < y2; y++) {
        grid[x][y] = 0;
      }
    }
  }

  // 3단계: BFS로 캐릭터 → 아이템 최단거리 탐색
  const startX = characterX * 2;
  const startY = characterY * 2;
  const endX = itemX * 2;
  const endY = itemY * 2;

  const queue = [[startX, startY, 0]];
  const visited = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(false),
  );
  visited[startX][startY] = true;

  // 상하좌우 4방향
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  while (queue.length > 0) {
    const [curX, curY, dist] = queue.shift();

    if (curX === endX && curY === endY) {
      return dist / 2; // 2배 확장했으므로 실제 거리는 절반
    }

    for (let i = 0; i < 4; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];

      if (
        nextX >= 0 &&
        nextX < GRID_SIZE &&
        nextY >= 0 &&
        nextY < GRID_SIZE &&
        grid[nextX][nextY] === 1 &&
        !visited[nextX][nextY]
      ) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, dist + 1]);
      }
    }
  }

  return 0; // 도달 불가 시 (문제 조건상 항상 도달 가능)
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8,
  ),
); // 17
console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1,
  ),
); // 11
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7)); // 9
console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10,
  ),
); // 15
console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3,
  ),
); // 10
