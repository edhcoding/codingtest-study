// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

// 1	매우 비동의 - 3점
// 2	비동의 - 2점
// 3	약간 비동의 - 1점
// 4	모르겠음 - 0점
// 5	약간 동의 - 1점
// 6	동의 - 2점
// 7	매우 동의 - 3점

function solution(survey, choices) {
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split("");
    const choice = choices[i];

    if (choice < 4) {
      scores[type1] += 4 - choice;
    } else if (choice > 4) {
      scores[type2] += choice - 4;
    }
  }

  const types = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  return types.map(([a, b]) => (scores[a] >= scores[b] ? a : b)).join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
