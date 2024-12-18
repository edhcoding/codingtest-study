/**
 * 없는 숫자 더하기 - https://school.programmers.co.kr/learn/courses/30/lessons/86051
 *
 * [문제 설명]
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 사항]
 * 1 ≤ numbers의 길이 ≤ 9
 * 0 ≤ numbers의 모든 원소 ≤ 9
 * numbers의 모든 원소는 서로 다릅니다.
 */

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  console.log(answer);

  return answer;
}

/**
 * 시간 복잡도 - O(n)
 * - 반복문이 한 번 돌기 때문에 O(n)
 * 공간 복잡도 - O(1)
 * - 결과 배열을 저장하는 변수 하나만 사용하므로 O(1)
 */

/**
 * TIL
 * 배열에서 원소를 찾는 메서드는 includes - 주어진 요소가 포함되어 있으면 true, 아니면 false를 반환
 */

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14
solution([5, 8, 4, 0, 6, 7, 9]); // 6

// 더 좋은 한 줄 코드
function solution2(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

solution2([1, 2, 3, 4, 6, 7, 8, 0]); // 14
solution2([5, 8, 4, 0, 6, 7, 9]); // 6
