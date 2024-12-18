/**
 * 하샤드 수 - https://school.programmers.co.kr/learn/courses/30/lessons/12947
 *
 * [문제 설명]
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 *
 * [제한 조건]
 * x는 1 이상, 10000 이하인 정수입니다.
 *
 * [입출력 예]
 * x	return
 * 10	true
 * 12	true
 * 11	false
 * 13	false
 */

/**
 * 추가 공부)
 * 하샤드 수 란?
 * - 어떤 양의 정수가 있을 때, 그 수의 각 자릿수의 합으로 원래 수가 나누어 떨어지면 그 수를 하샤드 수라고 합니다.
 * ex) 18 => 1 + 8 = 9, 18 % 9 = 0 (하샤드 수)
 * ex) 11 => 1 + 1 = 2, 11 % 2 = 1 (x)
 */

// 내가 푼 코드

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  const answer = x % sum === 0;

  console.log(answer);

  return answer;
}

/**
 * 시간 복잡도 - O(n)
 * - String() O(n)
 * - split() O(n)
 * - reduce() O(n)
 * 공간 복잡도 - O(n)
 * - 문자열, 배열 저장 해야하기 때문에
 */

solution(10); // true
solution(12); // true
solution(11); // false
solution(13); // false

// 다른 사람이 푼 코드 (do while 문 사용 - 추가 공부)
// 성능 차이 크게 없음

function solution2(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  console.log(!(num % sum));

  return !(num % sum);
}

/**
 * 시간 복잡도 - O(n)
 * - do while 문 사용
 * 공간 복잡도 - O(1)
 * - 변수 하나만 사용
 */

solution2(10); // true
solution2(12); // true
solution2(11); // false
solution2(13); // false
