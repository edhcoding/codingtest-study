// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}

// 다른 사람 풀이
function solution(q, r, code) {
  return Array.from(code).reduce((result, word, i) => {
    if (i % q === r) return result + word;
    return result;
  }, "");
}

function solution(q, r, code) {
  var answer = "";
  [...code].map((v, idx) => (idx % q === r ? (answer += v) : answer));
  return answer;
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers"
