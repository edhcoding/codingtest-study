/**
 * 이진 변환 반복하기 - https://school.programmers.co.kr/learn/courses/30/lessons/70129
 *
 * [문제 설명]
 * 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
 * 1. x의 모든 0을 제거합니다.
 * 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 * 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
 * 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다.
 * s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
 * 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 사항]
 * s의 길이는 1 이상 150,000 이하입니다.
 * s에는 '1'이 최소 하나 이상 포함되어 있습니다.
 */

function solution(s) {
  let transformCount = 0; // 변환 횟수
  let removedZeros = 0; // 제거된 0의 개수

  while (s !== "1") {
    // 현재 문자열에서 0의 개수 세려면 문자열을 0으로 잘라서 배열로 변환 후 배열의 길이 - 1
    const zeros = s.split("0").length - 1;
    removedZeros += zeros; // 제거된 0의 개수 누적

    const ones = s.length - zeros; // 전체 문자열 길이 - 0의 개수 = 1의 개수
    s = ones.toString(2); // 1의 개수를 2진수로 변환

    // 여기까지 도달했다면 이진 변환 횟수 + 1, while문 돌며 반복
    transformCount++;
  }

  return [transformCount, removedZeros];
}

solution("110010101001"); // [3,8]
// solution("01110"); // [3,3]
// solution("1111111"); // [4,1]

/**
 * Slice(startIdx, endIdx) : 원본은 건들지 않고 배열 자르기
 * Splice(startIdx, number, elementToAdd) : 원본을 자르거나 추가하기
 * Split(separator, limit) : 문자열을 잘라서 배열로 변환 (문자열 => 배열)
 */
