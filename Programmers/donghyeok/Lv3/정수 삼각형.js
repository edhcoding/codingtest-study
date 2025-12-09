// https://school.programmers.co.kr/learn/courses/30/lessons/43105

// 문제: 삼각형의 꼭대기부터 바닥까지 내려가면서 합이 최대가 되는 경로를 찾기
function solution(triangle) {
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return (
          v + // 현재 값
          Math.max(
            index < cost.length ? cost[index] : 0,
            index > 0 ? cost[index - 1] : 0
          )
          // 현재 값 v 기준 오른쪽 왼쪽에 값이 존재한다면 해당 값을, 없으면 0
          // 왼쪽 값을 비교하는 이유는 삼각형 구조라서 첫번째 인덱스 기준 왼쪽에 값이 존재할 수 없음 (음수 인덱스 방지)
        );
      });
    }, [])
  );
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30
