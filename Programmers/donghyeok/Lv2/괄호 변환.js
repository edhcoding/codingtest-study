// https://school.programmers.co.kr/learn/courses/30/lessons/60058

// 괄호 방향을 반대로 변환하는 함수
function reverse(str) {
  return str
    .slice(1, str.length - 1) // 자르고
    .split("") // 배열로 변환
    .map((c) => (c === "(" ? ")" : "(")) // ( -> ) , ) -> ( 변환
    .join(""); // 배열을 합쳐서 문자열로 변환
}

function solution(p) {
  // 빈 문자열 -> 빈 문자열 반환
  if (p.length < 1) return "";

  let balance = 0; // 괄호 균형 체크 ( -> 1 , ) -> -1
  let pivot = 0;

  // 균형점 찾기
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") balance++; // ( -> 1
    else balance--; // ) -> -1

    // balance가 0이 되면 균형점 도달(인덱스 저장)
    if (balance === 0) {
      pivot = i + 1;
      break;
    }
  }

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  // u가 처음, 끝이 괄호라면 u + v 반환
  if (u[0] === "(" && u[u.length - 1] === ")") return u + v;
  // u가 올바른 괄호 문자열이 아니면 (v) + reverse(u) 반환
  else return "(" + v + ")" + reverse(u);
}

console.log(solution("(()())()")); // "(()())()"
console.log(solution(")(")); // "()"
console.log(solution("()))((()")); // "()(())()"
