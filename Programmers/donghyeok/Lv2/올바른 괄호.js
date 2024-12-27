/**
 * 올바른 괄호 - https://school.programmers.co.kr/learn/courses/30/lessons/12909
 *
 * [문제 설명]
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
 *
 * - "()()" 또는 "(())()" 는 올바른 괄호입니다.
 * - ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 * '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 *
 * [제한 사항]
 * 문자열 s의 길이 : 100,000 이하의 자연수
 * 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
 */

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]); // 마지막 추가
    } else {
      // 3번째 입력예시에서 solution(")()("); 이런 경우 ")" 이게 먼저 나오면 무조건 false 처리 해줘야함
      if (stack.length === 0) return false;
      stack.pop(); // 마지막 제거
    }
  }

  return stack.length === 0;
}

/**
 * 시간 복잡도: O(n)
 * - 문자열을 한 번 순회: O(n)
 * - push/pop 연산: O(1)
 *
 * 공간 복잡도: O(n)
 * - 최악의 경우 스택이 문자열 길이만큼 커질 수 있음 (예: "(((((")
 *
 */

solution("()()"); // true
solution("(())()"); // true
solution(")()("); // false
solution("(()("); // false

// 다른 풀이 (이 방법도 좋음)
function solution2(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

solution2("()()"); // true
solution2("(())()"); // true
solution2(")()("); // false
solution2("(()("); // false
