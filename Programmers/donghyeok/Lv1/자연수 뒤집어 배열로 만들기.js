/**
 * 자연수 뒤집어 배열로 만들기 - https://school.programmers.co.kr/learn/courses/30/lessons/12932
 *
 * [문제 설명]
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
 * 예를 들어 n이 12345이면 [5, 4, 3, 2, 1]을 리턴합니다.
 *
 * [제한 조건]
 * n은 10,000,000,000 이하인 자연수입니다.
 *
 * [입출력 예]
 * n	return
 * 12345	[5, 4, 3, 2, 1]
 */

// 숫자 => 문자열 => 배열 => 배열 뒤집기 => 배열 숫자로 변환
function solution(n) {
  var answer = [];

  answer = String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));

  console.log(answer);
  return answer;
}

/**
 * 시간 복잡도 - O(log n)
 * - String(n): O(log n) (숫자의 자릿수만큼)ㄹ
 * - split(""): O(log n)
 * - reverse(): O(log n)
 * - map(): O(log n)
 * - 전체적으로는 O(log n) (n의 자릿수에 비례)
 *
 * 공간 복잡도 - O(log n) (각 단계에서 생성되는 데이터 구조의 크기가 입력값 n의 자릿수(log n)에 비례함)
 * - String(n): 새로운 문자열 생성
 * - split(""): 문자열 길이만큼의 배열 생성
 * - reverse(): 새로운 배열 생성
 * - map(): 새로운 배열 생성
 * - 모두 숫자의 자릿수만큼의 공간 필요
 */

solution(12345); // [5, 4, 3, 2, 1]
