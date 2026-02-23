// https://school.programmers.co.kr/learn/courses/30/lessons/181939

// 내가 푼 코드
function solution(a, b) {
  const comb1 = Number(String(a) + String(b));
  const comb2 = Number(String(b) + String(a));

  return Math.max(comb1, comb2);
}

// 다른 사람이 푼 코드
function solution2(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
