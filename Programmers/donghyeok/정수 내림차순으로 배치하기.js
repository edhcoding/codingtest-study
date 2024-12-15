/**
 * 정수 내림차순으로 배치하기 - https://school.programmers.co.kr/learn/courses/30/lessons/12933
 *
 * [문제 설명]
 * 함수 solution은 정수 n을 매개변수로 입력받습니다.
 * n의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 * 예를 들어 n이 118372면 873211을 리턴해주면 됩니다.
 *
 * [제한 조건]
 * n은 1이상 8000000000 이하인 자연수입니다.
 *
 * [입출력 예]
 * n	return
 * 118372	873211
 */

function solution(n) {
  var answer = 0;

  answer = Number(
    // 마지막에 문자열 => 숫자
    String(n)
      .split("") // 문자열 배열로 변환
      .sort((a, b) => b - a) // 내림차순 정렬
      .join("") // 문자열로 변환
  );

  console.log(answer);

  return answer;
}

/**
 * 시간 복잡도 - O(log n)
 * - String(n): O(log n)
 * - split(""): O(log n)
 * - sort((a, b) => b - a): O(log n)
 * - join(""): O(log n)
 * - Number(): O(1)
 * 전체적으로는 O(log n) (n의 자릿수에 비례)
 *
 * 공간 복잡도 - O(log n)
 * - 각 단계에서 생성되는 데이터 구조의 크기가 입력값 n의 자릿수(log n)에 비례함
 */

solution(118372); // 873211
