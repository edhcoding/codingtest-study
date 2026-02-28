// https://school.programmers.co.kr/learn/courses/30/lessons/181937

function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
