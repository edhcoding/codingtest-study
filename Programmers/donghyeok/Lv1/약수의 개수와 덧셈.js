// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// left 에서 right 까지에서 약수의 개수가 홀수인 수는 빼고 짝수인 수는 더해서 반환
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱수인지 확인
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i; // 약수의 개수가 홀수 → 빼기
    } else {
      answer += i; // 약수의 개수가 짝수 → 더하기
    }
  }

  return answer;
}

// 메서드
// sqrt - 제곱근 반환
// ex. Math.sqrt(9) = 3

// Number.isInteger - 정수 확인
// ex. Number.isInteger(3) = true
// ex. Number.isInteger(3.1) = false

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
