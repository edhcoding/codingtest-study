// https://school.programmers.co.kr/learn/courses/30/lessons/181888

// 내가 푼 풀이1
function solution(num_list, n) {
  return num_list.filter((_, index) => index % n === 0);
}

// 내가 푼 풀이2
function solution2(num_list, n) {
  const answer = [];
  for (let i = 0; i < num_list.length; i += n) answer.push(num_list[i]);

  return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
