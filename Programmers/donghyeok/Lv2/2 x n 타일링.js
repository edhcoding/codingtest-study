// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 문제: 가로 2, 세로 1 직사각형 타일 -> 세로 2, 가로 n 직사각형을 채우는 방법의 수 반환

// n: 가로 길이
function solution(n) {
  // 각 길이에서의 경우의수 저장 배열
  // n+1을 하는 이유는 배열은 인덱스로 접근가능하고 0번째 인덱스는 사용하지 않기 때문에 n+1 크기의 배열 생성
  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  // dp[n] = dp[n-1] + dp[n-2]
  // 세로로 놓으면 1칸 차지 -> dp[n-1]
  // 가로로 놓으면 2칸 차지 -> dp[n-2]
  // 따라서 n번째 위치에 타일을 놓는 방법의 수는 dp[n-1] + dp[n-2]
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
}

console.log(solution(4)); // 5
