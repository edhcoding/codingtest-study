// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 소수 찾기 함수
function solution(n) {
  let answer = Array(n + 1).fill(false);
  answer[1] = true;

  for (let i = 2; i <= n; i++) {
    if (answer[i]) continue;

    for (let j = i + i; j <= n; j += i) answer[j] = true;
  }

  return answer.filter((v) => v === false).length - 1;
}

// 다른 사람 풀이 (어려움)
function solution2(n) {
  const upperLimit = Math.floor(Number(n));
  if (!Number.isFinite(upperLimit) || upperLimit < 2) return 0;

  // isPrime[i] === true 이면 i는 아직 소수 후보
  const isPrime = new Array(upperLimit + 1).fill(true);
  isPrime[0] = false; // 0은 소수 아님
  isPrime[1] = false; // 1은 소수 아님

  // i의 배수들을 지움 (i*i부터 시작해 중복 제거)
  for (let candidate = 2; candidate * candidate <= upperLimit; candidate++) {
    if (!isPrime[candidate]) continue;
    for (
      let multiple = candidate * candidate;
      multiple <= upperLimit;
      multiple += candidate
    ) {
      isPrime[multiple] = false;
    }
  }

  let primeCount = 0;
  for (let number = 2; number <= upperLimit; number++) {
    if (isPrime[number]) primeCount++;
  }

  return primeCount;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
