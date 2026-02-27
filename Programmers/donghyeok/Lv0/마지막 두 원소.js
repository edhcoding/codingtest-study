// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const secondLast = num_list[num_list.length - 2];
  const next = last > secondLast ? last - secondLast : last * 2;

  return [...num_list, next];
}

// 다른 사람 풀이
function solution2(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

// 다른 사람 풀이 2
function solution3(num_list) {
  const [sec, last] = num_list.slice(-2);
  last > sec ? num_list.push(last - sec) : num_list.push(last * 2);
  return num_list;
}

console.log(solution([2, 1, 6])); // [2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]
