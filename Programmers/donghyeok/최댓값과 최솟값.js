function solution(s) {
  var answer = "";

  const arr = s.split(" "); // ["1", "2", "3", "4"]
  const min = Math.min(...arr); // -1
  const max = Math.max(...arr); // 4

  answer = `${min} ${max}`;

  return answer;
}

/**
 * 시간 복잡도 : O(n)
 * - 문자열을 한 번만 순회하기 때문에
 * - split() 메서드: O(n) (문자열 길이에 비례)
 * - Math.min(), Math.max(): O(n) (배열 요소 수만큼 순회)
 * 공간 복잡도 : O(1)
 * - 변수 하나만 사용하기 때문에
 */

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");
