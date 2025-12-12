// https://school.programmers.co.kr/learn/courses/30/lessons/42839

// 문제: 만들 수 있는 소수가 몇 개인지 return
function solution(numbers) {
  const nums = numbers.split(""); // 문자열, 배열로 변환
  const primes = new Set();

  // 순열 생성 함수 (재귀)
  // current: 현재까지 만든 숫자 문자열
  // used: 사용한 인덱스 배열
  function makeNumber(current, used) {
    // 처음 빈 문자열은 소수 확인 건너뜀
    if (current) {
      // parseInt: 문자열 -> 숫자 변환
      const num = parseInt(current);

      // num이 소수면 primes 셋에 추가
      if (isPrime(num)) primes.add(num);
    }

    // 모든 숫자 사용했으면 종료
    if (used.length === nums.length) return;

    // 사용하지 않은 숫자 추가
    nums.forEach((num, idx) => {
      if (!used.includes(idx)) {
        makeNumber(current + num, [...used, idx]);
      }
    });
  }

  makeNumber("", []);
  return primes.size; // 소수 개수 반환
}

// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false; // 0 1 소수 아님

  // num을 2부터 i의 제곱만큼의 범위 까지 확인
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false; // 그중에서도 나누어 떨어지면 소수 아님
  }
  return true;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
