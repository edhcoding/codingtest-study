// https://school.programmers.co.kr/learn/courses/30/lessons/42860
// 문제 : 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// 내 풀이
function solution(name) {
  const n = name.length;

  // 1. 세로(알파벳 변경) 비용: 각 자리마다 위/아래 중 작은 값
  let vertical = 0;
  for (let i = 0; i < n; i++) {
    const up = name.charCodeAt(i) - 65; // 'A' = 65
    vertical += Math.min(up, 26 - up);
  }

  // 2. 가로(커서 이동) 최소 비용
  let minMove = n - 1; // 한 방향으로 쭉 가는 경우
  for (let i = 0; i < n; i++) {
    let next = i + 1;
    while (next < n && name[next] === "A") next++; // 다음으로 'A'가 아닌 위치
    // i까지 오른쪽으로 갔다가, next 이후를 처리하기 위해 되돌아가는 경우들 중 최소
    minMove = Math.min(minMove, i + (n - next) + Math.min(i, n - next));
  }

  return vertical + minMove;
}

// 다른 사람 풀이
function solution(name) {
  let totalMoves = 0; // 총 이동 횟수
  let leftRightMoves = name.length - 1; // 좌우 이동 횟수 (초기값은 한 방향으로 쭉 이동하는 경우)

  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    // 각 문자에 대해 위아래 이동 횟수 계산
    let upMoves = char.charCodeAt(0) - "A".charCodeAt(0);
    let downMoves = 26 - upMoves;
    totalMoves += Math.min(upMoves, downMoves); // 위아래 중 최소 이동 횟수 더하기

    // 현재 위치 이후의 연속된 A의 끝 위치 찾기
    let nextIndex = i + 1;
    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex++;
    }

    // 좌우 이동의 최소값 갱신
    // 1. 현재까지 왔다가 돌아가는 경우
    let moveBack = i * 2 + (name.length - nextIndex);
    // 2. 끝까지 갔다가 돌아오는 경우
    let moveForward = (name.length - nextIndex) * 2 + i;
    leftRightMoves = Math.min(leftRightMoves, moveBack, moveForward);
  }

  return totalMoves + leftRightMoves; // 총 이동 횟수 반환
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
