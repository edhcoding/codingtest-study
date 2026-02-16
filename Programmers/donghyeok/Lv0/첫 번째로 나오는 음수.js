// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list) {
  // findIndex : 조건을 만족하는 첫 번째 요소의 인덱스를 반환
  // ex) num_list = [12, 4, 15, 46, 38, -2, 15] 일 때, num_list.findIndex((num) => num < 0) = 5
  const idx = num_list.findIndex((num) => num < 0);
  return idx === -1 ? -1 : idx;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
