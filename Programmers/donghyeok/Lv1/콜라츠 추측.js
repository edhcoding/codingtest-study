/**
 * 콜라츠 추측 - https://school.programmers.co.kr/learn/courses/30/lessons/12943
 *
 * [문제 설명]
 * 1937년 Collatz가 제시한 콜라츠 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
 * 작업은 다음과 같습니다.
 * ```
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다.
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 1-3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 * ```
 * 예를 들어, 입력된 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
 * 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
 * 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
 *
 * [제한 조건]
 * 입력된 수, num은 1 이상 8,000,000 이하인 정수입니다.
 *
 * [입출력 예]
 * num	result
 * 6	8
 * 16	4
 * 626331	-1
 */

function solution(num) {
  // 주어진 수가 1인 경우에는 0 반환합니다.
  if (num === 1) return 0;

  let count = 0;

  // 1이 될 때까지 반복
  while (count < 500) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    count++;

    if (num === 1) {
      console.log(count);
      return count;
    }
  }

  return -1;
}

/**
 * 시간 복잡도 O(n)
 * - 주어진 수가 1이 아닌 경우, 500번 반복하면서 계산합니다.
 * 공간 복잡도 O(1)
 * - count, num 변수만 사용하므로 입력값의 크기와 관계없이 일정한 메모리만 사용합니다.
 */

solution(6); // 8
solution(16); // 4
solution(626331); // -1

// 다른 사람 풀이 (좀 더 깔끔한 풀이)
function solution2(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

solution2(6); // 8
solution2(16); // 4
solution2(626331); // -1
