// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}

console.log(solution(3, 20, 4)); // 10
