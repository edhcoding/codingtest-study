// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 문제:  두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성
function solution(a, b) {
  // reduce를 사용하여 각 요소를 곱한 후 모두 더하기
  return a.reduce((sum, value, index) => sum + value * b[index], 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
