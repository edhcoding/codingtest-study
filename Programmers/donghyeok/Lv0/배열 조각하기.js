// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  let result = arr;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) result = result.slice(0, query[i] + 1);
    else result = result.slice(query[i]);
  }
  return result;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
