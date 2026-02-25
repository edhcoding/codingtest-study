// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  const op1 = 2 * a * b;
  const op2 = Number(`${a}${b}`);

  return Math.max(op1, op2);
}

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
