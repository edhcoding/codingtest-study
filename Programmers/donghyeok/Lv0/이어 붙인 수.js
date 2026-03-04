// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  const odd = num_list.filter((n) => n % 2 === 1).join(""); // 홀수
  const even = num_list.filter((n) => n % 2 === 0).join(""); // 짝수

  return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
