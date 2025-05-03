// 피로도(완전 탐색) - https://school.programmers.co.kr/learn/courses/30/lessons/87946

// k: 내가 가지고 있는 현재 피로도, dungeons: 던전별 [최소 피로도, 소모 피로도] - return 최대 던전 탐험 수
function solution(k, dungeons) {
  let max = 0;

  function permute(dungeons, visited, pathArray) {
    // 모든 던전 완전탐색 완료 (방문 배열 크기 === 던전 수) -> 탐헌한 던전 수 체크(check 함수)
    if (pathArray.length === dungeons.length) {
      check(pathArray);
      return;
    }

    // 모든 던전 완전탐색
    for (let i = 0; i < dungeons.length; i++) {
      // 던전 방문 하지 않았다면 -> 방문 처리, 방문 배열에 추가, 재귀 호출(다음 던전 탐색), 방문 처리/배열 제거(백트래킹)
      if (!visited[i]) {
        visited[i] = true;
        pathArray.push(dungeons[i]);
        permute(dungeons, visited, pathArray);
        visited[i] = false;
        pathArray.pop();
      }
    }
  }

  function check(order) {
    // fatigue(피로도), 탐헌한 던전 수
    let fatigue = k; 
    let cnt = 0;

    // order: 탐험한 던전 순서 배열
    for (let [min, cost] of order) {
      // 현재 내 피로도가 던전 최소 피로도보다 크다면 -> 던전 탐험
      if (fatigue >= min) {
        fatigue -= cost;
        cnt++;
      } else {
        break;
      }
    }

    // 탐헌한 던전 수가 최대 탐험수보다 크다면 갱신
    if (cnt > max) max = cnt;
  }

  permute(dungeons, new Array(dungeons.length).fill(false), []);

  return max;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
