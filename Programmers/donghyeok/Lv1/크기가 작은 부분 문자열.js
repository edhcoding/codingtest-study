// https://school.programmers.co.kr/learn/courses/30/lessons/147355

// BigInt - 큰 수 처리
function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);

    if (BigInt(p) >= BigInt(value)) count++; // p 가 value 보다 크거나 같을때 카운트 증가
  }

  return count;
}

// t, p
console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3
