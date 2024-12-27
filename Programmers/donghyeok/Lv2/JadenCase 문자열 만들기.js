/**
 * JadenCase 문자열 만들기 - https://school.programmers.co.kr/learn/courses/30/lessons/12951
 *
 * [문제 설명]
 * JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
 * 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
 * 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
 *
 * [제한 사항]
 * s는 길이 1 이상 200 이하인 문자열입니다.
 * s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
 * - 숫자는 단어의 첫 문자로만 나옵니다.
 * - 숫자로만 이루어진 단어는 없습니다.
 * - 공백문자가 연속해서 나올 수 있습니다.
 */

// 생각 깊이 해야하는 문제
function solution(s) {
  return (
    s
      .toLowerCase() // 전부 소문자
      // 소문자를 한 단어씩 배열로 만들기 (공백도 포함 - 그렇기 때문에 공백이 연속으로 있을 수 있어서 split(' ')이 아닌 다른 방식 사용)
      .split("")
      .map((char, i) => {
        // 첫 문자이거나 앞에 공백이 있는 경우 대문자로 변환
        // s[i - 1] === " " 의미는 -1을 해줬기 때문에 이전 문자가 공백인지 확인하는 조건임(그래서 공백이라면 대문자로 변환하는 조건이 됨)
        if (i === 0 || s[i - 1] === " ") {
          return char.toUpperCase();
        }
        return char;
      })
      .join("")
  );
}

/**
 * 시간 복잡도: O(n)
 * - toLowerCase(): O(n)
 * - split(): O(n)
 * - map(): O(n)
 * - join(): O(n)
 * - 전체: O(n) (순차적 실행)
 *
 * 공간 복잡도: O(n)
 * - split으로 생성된 배열: O(n)
 * - map으로 생성된 새 배열: O(n)
 * - 최종 문자열: O(n)
 * - 전체: O(n) (동시에 사용되는 최대 공간)
 */

solution("3people unFollowed me"); // "3people Unfollowed Me"
solution("for the last week"); // "For The Last Week"

// 다른 풀이 (한 줄로 작성가능함) - 단축 표현
function solution2(s) {
  return s
    .split(" ") // 공백을 기준으로 문자열을 배열로 만들기
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()) // 첫 문자를 대문자로 변환하고 나머지 문자를 소문자로 변환
    .join(" "); // 배열을 문자열로 합치기
}

solution2("3people unFollowed me"); // "3people Unfollowed Me"
solution2("for the last week"); // "For The Last Week"

/**
 * TIL - 자바스크립트 메서드
 *
 * 1. toLowerCase() : 문자열을 소문자로 변환
 * 2. toUpperCase() : 문자열을 대문자로 변환
 * 3. charAt() : 문자열의 지정된 인덱스의 문자를 반환
 * 예시
 * const str = "Hello";
 *
 * console.log(str.charAt(0)); // "H"
 * console.log(str.charAt(1)); // "e"
 * console.log(str.charAt(4)); // "o"
 * console.log(str.charAt(5)); // "" (빈 문자열)
 *
 * 배열 인덱스 접근 방식으로도 동일한 결과를 얻을 수 있습니다
 * console.log(str[0]); // "H"
 *
 * 4. substring() : 문자열의 시작 인덱스부터 끝 인덱스 전까지의 부분 문자열을 반환
 * 예시
 * const str = "Hello World";
 *
 * // substring(시작인덱스)
 * console.log(str.substring(6)); // "World"
 *
 * // substring(시작인덱스, 끝인덱스)
 * console.log(str.substring(0, 5)); // "Hello"
 * console.log(str.substring(6, 11)); // "World"
 *
 * 실제 코드에서 사용된 예시
 * const word = "javascript";
 * console.log(word.charAt(0).toUpperCase() + word.substring(1));
 * // "Javascript"
 * charAt(0)으로 첫 글자 'j'를 가져와서 대문자로 변환하고,
 * substring(1)로 두 번째 글자부터 끝까지 'avascript'를 가져와서 합칩니다.
 *
 * 5. join("") : 배열을 문자열로 합치기
 * 6. split(" ") : 문자열을 공백을 기준으로 배열로 만들기
 */
