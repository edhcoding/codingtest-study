// https://school.programmers.co.kr/learn/courses/30/lessons/181907

function solution(my_string, n) {
  return my_string.slice(0, n);
}

console.log(solution("ProgrammerS123", 11)); // "ProgrammerS"
console.log(solution("He110W0r1d", 5)); // "He110"
