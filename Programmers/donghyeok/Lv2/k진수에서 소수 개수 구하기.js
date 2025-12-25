// https://school.programmers.co.kr/learn/courses/30/lessons/92335

// 소수 판별 함수
function isPrime(num) {
  if (num <= 1) return false;
  // sqrt - 숫자의 제곱근 반환 ex. Math.sqrt(9) = 3
  // parseInt - 문자열을 숫자로 변환 ex. parseInt("3") = 3 (소수 버림)
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;

  // n을 k진법으로 변환
  const bin_str = n.toString(k);
  // '0'을 기준으로 분리
  const num_list = bin_str.split("0");

  // 소수 개수 계산
  for (let num of num_list) {
    if (isPrime(num)) answer++;
  }
  return answer;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
