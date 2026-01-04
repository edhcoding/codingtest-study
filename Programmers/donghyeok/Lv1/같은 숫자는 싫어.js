// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

// 내가 푼 방법
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 다른 사람이 푼 방법
function solution2(arr) {
  return arr.filter((num, i) => num !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution([4, 4, 4, 3, 3])); // [4, 3]

console.log(solution2([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution2([4, 4, 4, 3, 3])); // [4, 3]
