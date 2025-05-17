// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const tuples = s
    .slice(2, -2) // 앞뒤 중괄호 제거
    .split("},{") // 문자열 중간에 있는 },{ 기준으로 분리 (문자열 -> 배열)
    .map((str) => str.split(",").map(Number)) // 배열 요소 문자열을 , 기준으로 다시 분리, 숫자로 변환
    .sort((a, b) => a.length - b.length); // 배열 길이에 따라 오름차순 정렬 (원래 순서 보장하기 위함)

  const answer = [];

  for (const tuple of tuples) {
    for (const num of tuple) {
      if (!answer.includes(num)) answer.push(num);
    }
  }

  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1]
