// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 문제에서는 문자를 큰거에서 작은순으로 정렬하라고 함
// sort
// a - b : 오름차순 (a-b가 양수일경우 -> a > b)
// b - a : 내림차순 (b-a가 양수일경우 -> b > a)

// 추가적으로 JavaScript의 문자열은 ASCII 코드 값을 가지고 있음
// A = 65, Z = 90, a = 97, z = 122
// 따라서 문자열을 내림차순 정렬할 때, 문자열을 ASCII 코드 값으로 변환하여 정렬하면 됨

function solution(s) {
  // 문자열을 배열로 변환 후 내림차순 정렬, 다시 문자열로 합치기
  var answer = s
    .split("")
    .sort((a, b) => (b > a ? 1 : -1)) // 내림차순 정렬
    .join("");

  return answer;
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
