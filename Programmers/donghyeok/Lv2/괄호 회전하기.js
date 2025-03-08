/**
 * 괄호 회전하기 - https://school.programmers.co.kr/learn/courses/30/lessons/76502
 *
 * [문제 설명]
 * 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
 *
 * 1) (), [], {} 는 모두 올바른 괄호 문자열입니다.
 * 2) 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다.
 * 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
 * 3) 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다.
 * 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
 *
 * 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
 * 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 사항]
 * s의 길이는 1 이상 1,000 이하입니다.
 */

function solution(s) {
  function isValid(str) {
    const stack = [];
    const pairs = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (const char of str) {
      if (char in pairs) stack.push(char); // 여는 괄호 스택에 추가
      else if (stack.length === 0 || pairs[stack.pop()] !== char) return false; // 닫는 괄호 스택이 비어있거나 괄호의 짝이 맞지 않는 경우
    }
    return stack.length === 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) count++;
  }

  return count;
}

console.log(solution("[](){}")); // 3
// console.log(solution("}]()[{")); // 2
// console.log(solution("[)(]")); // 0
// console.log(solution("}}}")); // 0
