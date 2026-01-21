// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = '',
  numbers = ['4', '1', '2']

  while(n){
    answer = numbers[n % 3] + answer
    n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3)
  }

  return answer;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11