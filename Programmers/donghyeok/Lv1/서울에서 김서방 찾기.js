/**
 * 서울에서 김서방 찾기 - https://school.programmers.co.kr/learn/courses/30/lessons/12919
 *
 * [문제 설명]
 * String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성해주세요.
 * seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 *
 * [제한 조건]
 * seoul은 길이 1 이상, 1000 이하인 배열입니다.
 * seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
 * "Kim"은 반드시 seoul 안에 포함되어 있습니다.
 *
 * [입출력 예]
 * seoul	return
 * ["Jane", "Kim"]	"김서방은 1에 있다"
 */

function solution(seoul) {
  const answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;

  console.log(answer);

  return answer;
}

/**
 * 시간 복잡도 - O(n)
 * - indexOf() O(n)
 * 공간 복잡도 - O(1)
 * - 결과 문자열을 저장하는 변수 하나만 사용합니다.
 */

solution(["Jane", "Kim"]); // "김서방은 1에 있다"

// 더 짧게 푼 다른 사람 코드
function solution2(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}

/**
 * TIL
 * - indexOf() 메서드는 배열에서 주어진 값과 일치하는 첫 번째 요소의 인덱스를 반환합니다.
 * - 배열에서 주어진 값과 일치하는 요소가 없으면 -1을 반환합니다.
 */
