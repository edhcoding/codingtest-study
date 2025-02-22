// 서버 증설 횟수 - https://school.programmers.co.kr/learn/courses/30/lessons/389479

// players: 시간대별 이용자 수 배열 (0 ~ 23시)
// m: 서버 한 대당 처리 가능한 최대 이용자 수
// k: 서버 한 대가 운영 가능한 시간

function solution(players, m, k) {
  let add = 0; // 총 서버 증설 횟수를 저장할 변수
  let server = new Array(24).fill(0); // 각 시간대별 서버 수를 저장할 배열

  // entries() 메서드는 배열의 각 요소에 대한 키와 값을 배열로 반환
  for (let [i, player] of players.entries()) {
    // 현재 시간에 필요한 서버 수
    let req = Math.floor(player / m);

    // 현재 시간에 가용한 서버가 필요한 서버보다 적다면 (서버 부족!)
    if (server[i] < req) {
      let expand = req - server[i]; // 필요한 서버 만큼 증설
      add += expand; // 총 서버 증설 횟수 증가

      // 증설한 서버는 k시간 동안 사용 가능
      for (let j = 0; j < k; j++) {
        let idx = i + j;
        if (idx < 24) server[idx] += expand; // 24시간을 넘지 않는 범위에서 k 시간만큼 증설
      }
    }
  }

  return add;
}

console.log(
  solution(
    [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
    3,
    5
  )
); // 7
