/**
 * 구명보트 - https://school.programmers.co.kr/learn/courses/30/lessons/42885
 *
 * [문제 설명]
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
 * 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
 *
 * 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
 *
 * 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 *
 * [제한 사항]
 * 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
 * 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
 */

function solution(people, limit) {
  people.sort((a, b) => a - b);

  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    // 가장 가벼운 사람과 무거운 사람을 같이 태울 수 있는 경우
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      // 무거운 사람만 태우는 경우
      right--;
    }
    boats++;
  }

  console.log(boats);
  return boats;
}

solution([70, 50, 80, 50], 100); // 3
solution([70, 80, 50], 100); // 3
