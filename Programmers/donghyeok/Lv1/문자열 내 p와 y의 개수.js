/**
 * 문자열 내 p와 y의 개수 - https://school.programmers.co.kr/learn/courses/30/lessons/12916
 *
 * [문제 설명]
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 * 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 *
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 *
 * [제한 조건]
 * 문자열 s의 길이 : 50 이하의 자연수
 * 문자열 s는 알파벳으로만 이루어져 있습니다.
 *
 * [입출력 예]
 * s	answer
 * "pPoooyY"	true
 * "Pyy"	false
 */

// p, y 같은면 true, 다르면 false (대소문자 구별 X)
// p, y 모두 하나도 없는 경우는 항상 true
function solution(s) {
  const pCount = s
    .split("") // 문자열 배열로 분리
    .filter((char) => char === "p" || char === "P").length; // p, P 개수 카운트
  const yCount = s
    .split("")
    .filter((char) => char === "y" || char === "Y").length; // y, Y 개수 카운트

  console.log(pCount, yCount);

  return pCount === yCount;
}

/**
 * 시간 복잡도 - O(n)
 * - 문자열을 한 번 순회하기 때문에 O(n)
 * 공간 복잡도 - O(1)
 * - 변수 하나만 사용하기 때문에 O(1)
 */

solution("pPoooyY"); // true
solution("Pyy"); // false
