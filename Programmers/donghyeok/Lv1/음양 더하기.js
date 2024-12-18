/**
 * 음양 더하기 - https://school.programmers.co.kr/learn/courses/30/lessons/76501
 *
 * [문제 설명]
 * 어떤 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
 * 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 사항]
 * absolutes의 길이는 1 이상 1,000 이하입니다.
 * absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
 * signs의 길이는 absolutes의 길이와 같습니다.
 * signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
 */

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
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

solution([4, 7, 12], [true, false, true]); // 9
solution([1, 2, 3], [false, false, true]); // 0

// 더 좋은 코드 - 한 줄로 표현...
function solution2(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

solution2([4, 7, 12], [true, false, true]); // 9
solution2([1, 2, 3], [false, false, true]); // 0
