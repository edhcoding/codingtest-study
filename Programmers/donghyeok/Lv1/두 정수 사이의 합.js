/**
 * 두 정수 사이의 합 - https://school.programmers.co.kr/learn/courses/30/lessons/12912
 * [문제 설명]
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 *
 * [제한 조건]
 * a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
 * a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
 * a와 b의 대소관계는 정해져있지 않습니다.
 *
 * [입출력 예]
 * a	b	return
 * 3	5	12
 * 3	3	3
 * 5	3	12
 */

function solution(a, b) {
  var answer = 0;

  // a가 b보다 크면 두 수 교환
  if (a > b) {
    [a, b] = [b, a];
    console.log(a, b);
  }

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  console.log(answer);

  return answer;
}

/**
 * 시간 복잡도 - O(n)
 * - 반복문이 한 번 돌기 때문에 O(n)
 * 공간 복잡도 - O(1)
 * - 변수 하나만 사용하기 때문에 O(1)
 */

solution(3, 5); // 12
// solution(3, 3); // 3
// solution(5, 3); // 12
