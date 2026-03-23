// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const answer = [];

  for (const expression of quiz) {
    const [leftPart, resultStr] = expression.split(" = ");
    const parts = leftPart.split(" ");

    const leftOperand = parseInt(parts[0], 10);
    const operator = parts[1];
    const rightOperand = parseInt(parts[2], 10);
    const expectedResult = parseInt(resultStr, 10);

    let actualResult;
    if (operator === "+") {
      actualResult = leftOperand + rightOperand;
    } else if (operator === "-") {
      actualResult = leftOperand - rightOperand;
    } else {
      // 예상치 못한 연산자 처리
      actualResult = NaN;
    }

    answer.push(actualResult === expectedResult ? "O" : "X");
  }

  return answer;
}

// 다른 사람 풀이
function solution2(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]),
); // ["O", "O", "X", "O"]
