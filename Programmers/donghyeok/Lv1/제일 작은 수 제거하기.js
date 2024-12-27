/**
 * 제일 작은 수 제거하기 - https://school.programmers.co.kr/learn/courses/30/lessons/12935
 *
 * [문제 설명]
 * 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
 * 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
 * 예를 들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
 *
 * [제한 조건]
 * arr은 길이 1 이상인 배열입니다.
 * 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
 */

function solution(arr) {
  if (arr.length === 1) answer.push(-1);

  const answer = arr.filter((item) => item != Math.min(...arr));

  return answer;
}

/**
 * 시간 복잡도 - O(n)
 * - filter는 O(n)
 * - Math.min은 O(n)
 * 공간 복잡도 - O(n)
 * - 새로운 배열을 만들어 반환하기 때문에
 */

solution([4, 3, 2, 1]); // [4, 3, 2]
solution([10]); // [-1]
