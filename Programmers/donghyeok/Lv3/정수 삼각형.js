// https://school.programmers.co.kr/learn/courses/30/lessons/43105

// 문제: 삼각형의 꼭대기부터 바닥까지 내려가면서 합이 최대가 되는 경로를 찾기
function solution(triangle) {
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return (
          v + // 현재 값
          Math.max(
            index < cost.length ? cost[index] : 0, // cost 왼쪽 값
            index > 0 ? cost[index - 1] : 0 // cost 오른쪽 값
          )
        );
      });
    }, [])
  );
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30
