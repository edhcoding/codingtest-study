// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  // reduce 사용해서 곱, 합 구했음

  // 초기값을 1로 설저한 이유는 0 * 숫자 = 0 이므로 초기값을 1로 설정해줌
  const product = num_list.reduce((acc, n) => acc * n, 1);
  const sum = num_list.reduce((acc, n) => acc + n, 0);

  return product < sum * sum ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
