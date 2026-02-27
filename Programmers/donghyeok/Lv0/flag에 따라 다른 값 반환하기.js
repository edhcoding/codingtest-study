// https://school.programmers.co.kr/learn/courses/30/lessons/181933

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

console.log(solution(-4, 7, true)); // 3
console.log(solution(-4, 7, false)); // -11
