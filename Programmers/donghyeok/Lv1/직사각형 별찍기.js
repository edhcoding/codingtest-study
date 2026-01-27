// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

function solution(a, b) {
  let resultStr = ``;
  for (let i = 0; i < b; i++) {
    // rows
    if (i) resultStr += "\n";

    resultStr += "*".repeat(a);
  }

  return resultStr;
}

console.log(solution(5, 3)); // 3
