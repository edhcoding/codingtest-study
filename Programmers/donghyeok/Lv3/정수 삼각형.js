// https://school.programmers.co.kr/learn/courses/30/lessons/43105

// 문제: 삼각형의 꼭대기부터 바닥까지 내려가면서 합이 최대가 되는 경로를 찾기
function solution(triangle) {
  // 원본 복사 - 각 위치에서 최대 합 저장하려고
  const dp = triangle.map((row) => [...row]);

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] += dp[i - 1][0];
      }
      else if (j === triangle[i].length - 1) {
        dp[i][j] += dp[i - 1][j - 1];
      }
      else {
        dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }

  const lastRow = dp[dp.length - 1];
  return Math.max(...lastRow);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30
