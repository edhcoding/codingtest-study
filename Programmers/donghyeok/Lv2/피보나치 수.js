/**
 * 피보나치 수 - https://school.programmers.co.kr/learn/courses/30/lessons/12945
 *
 * [문제 설명]
 * 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
 * 예를들어
 * F(2) = F(0) + F(1) = 0 + 1 = 1
 * F(3) = F(1) + F(2) = 1 + 1 = 2
 * F(4) = F(2) + F(3) = 1 + 2 = 3
 * F(5) = F(3) + F(4) = 2 + 3 = 5
 * 와 같이 이어집니다.
 * 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
 *
 * [제한 사항]
 * n은 2 이상 100,000 이하인 자연수입니다.
 */

function solution(n) {
  // 첫 번째 수와 두 번째 수 초기화
  let first = 0; // F(0) = 0
  let second = 1; // F(1) = 1

  for (let i = 2; i <= n; i++) {
    // 앞으 두 수를 더한 값이 그 다음 값
    let current = first + second;

    current = current % 1234567;

    // 순서 바꿔 다음 계산 준비
    first = second;
    second = current;
  }

  return second;
}

solution(3); // 2
solution(5); // 5

// 다른 풀이 방법
function solution2(n) {
  // 피보나치 수열을 저장할 배열 초기화
  const fibo = [0, 1];

  // n번째 피보나치 수까지 계산
  for (let i = 2; i <= n; i++) {
    // 이전 두 수를 더하고 1234567로 나눈 나머지를 저장
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  return fibo[n];
}

solution2(3); // 2
solution2(5); // 5
