/**
 * 가장 큰 수 - https://school.programmers.co.kr/learn/courses/30/lessons/42746
 *
 * [문제 설명]
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 *
 * 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 *
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 *
 * [제한 사항]
 * numbers의 길이는 1 이상 100,000 이하입니다.
 * numbers의 원소는 0 이상 1,000 이하입니다.
 * 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
 */

// 처음 푼 풀이
function solution(numbers) {
  const getFirstWord = (num) => String(num)[0];

  const answer = numbers
    .sort((a, b) => {
      // a와 b를 더해 이어붙인 후 음수인지 양수인지 비교해 정렬 (음수면 a가 더 큰값이니까 a가 앞으로 와야함)
      if (getFirstWord(a) === getFirstWord(b))
        String(b) + String(a) - (String(a) + String(b));

      return getFirstWord(b) - getFirstWord(a);
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

solution([6, 10, 2]); // "6210"
solution([3, 30, 34, 5, 9]); // "9534330"

// 내가 푼 최적화 코드
function solution2(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");

  console.log(answer);

  return answer[0] === "0" ? "0" : answer;
}

solution2([6, 10, 2]); // "6210"
solution2([3, 30, 34, 5, 9]); // "9534330"
