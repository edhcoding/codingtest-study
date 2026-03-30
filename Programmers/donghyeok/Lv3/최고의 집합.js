// https://school.programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  if (s < n) return [-1];

  const baseQuotient = Math.floor(s / n);
  const remainder = s % n;
  const answer = [];
  for (let i = 0; i < n - remainder; i++) answer.push(baseQuotient);

  for (let i = 0; i < remainder; i++) answer.push(baseQuotient + 1);

  return answer;
}

console.log(solution(2, 9)); // [4, 5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4, 4]
