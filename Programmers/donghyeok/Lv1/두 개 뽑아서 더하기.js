// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 내가 푼 풀이
function solution(numbers) {
  let sumArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        sumArr.push(numbers[i] + numbers[j]);
      }
    }
  }

  const set = new Set(sumArr);
  const uniqueArr = [...set];

  return uniqueArr.sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution2(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
