// https://school.programmers.co.kr/learn/courses/30/lessons/388353

// BFS 탐색을 통해 컨테이너를 찾고 제거

// storage: 컨테이너 정보를 담은 1차원 배열, requests: 출고할 컨테이너 종류와 출고방법을 요청 순서대로 담은 1차원 배열
// return: 모든 요청을 순서대로 완료한 후 남은 컨테이너의 수

// 첫 번째 입력예시: ["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]
function solution(storage, requests) {
  // 패딩을 포함한 2차원 배열 생성
  const n = storage.length; // 세로 (배열의 행)
  const m = storage[0].length; // 가로 (배열의 열)

  let board = new Array(n + 2).fill("").map((_, i) => {
    if (i === 0 || i === n + 1) return new Array(m + 2).fill("");
    return ["", ...storage[i - 1].split(""), ""];
  });

  // BFS 탐색을 위한 방향 배열 - 상, 하, 좌, 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(target) {
    const visited = new Array(n + 2)
      .fill(false)
      .map(() => new Array(m + 2).fill(false));

    const toRemove = {};

    // BFS는 탐색을 위해 시작 지점을 큐에 넣어줌
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
      const [x, y] = queue.pop();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < n + 2 &&
          ny >= 0 &&
          ny < m + 2 &&
          !visited[nx][ny]
        ) {
          // 타겟 컨테이너 찾으면 기록
          if (board[nx][ny] === target[0]) toRemove[`${nx} ${ny}`] = 1;

          // 이동 가능한 조건 확인
          // 지게차 사용 (빈 공간으로만 이동 가능)
          if (target.length === 1 && board[nx][ny] === "") {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          } else if (target.length === 2) {
            // 크레인 사용 (어떤 공간이든 이동 가능)
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }

    // 찾은 컨테이너 제거
    for (let key in toRemove) {
      const [x, y] = key.split(" ").map(Number);
      board[x][y] = "";
    }
  }

  // 각 요청 처리
  for (let request of requests) bfs(request);

  // 남은 컨테이너 수 계산
  return board.reduce(
    (sum, row) => sum + row.filter((v) => v !== "").length,
    0
  );
}

console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"])); // 11
console.log(
  solution(["HAH", "HBH", "HHH", "HAH", "HBH"], ["C", "B", "B", "B", "B", "H"])
); // 4
