// https://school.programmers.co.kr/learn/courses/30/lessons/181910
// 문제: 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성

// slice : 문자열의 일부를 잘라서 반환하는 메서드
// ex) "ProgrammerS123".slice(-11) => "ProgrammerS123"
// ex) "ProgrammerS123".slice(-1) => "3"

function solution(my_string, n) {
  return my_string.slice(-n);
}

console.log(solution("ProgrammerS123", 11)); // "grammerS123"
console.log(solution("He110W0r1d", 1)); // "W0r1d"
