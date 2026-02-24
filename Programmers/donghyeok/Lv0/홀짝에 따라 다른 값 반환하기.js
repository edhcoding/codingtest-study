// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let answer = 0;

  // n이 홀수면 1부터 n까지 홀수만 더하고
  // n이 짝수면 2부터 n까지 짝수만 골라서 제곱해서 더함
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) answer += i;
  } else {
    for (let i = 2; i <= n; i += 2) answer += i * i;
  }
  return answer;
}

// 다른 사람 풀이
function solution2(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220
