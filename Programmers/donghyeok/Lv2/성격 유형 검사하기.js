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
    const score = choices[i];

    if (score < 4) {
      scores[type1] += 4 - score;
    } else if (score > 4) {
      scores[type2] += score - 4;
    }
  }

  let result = "";
  result += scores.R >= scores.T ? "R" : "T";
  result += scores.C >= scores.F ? "C" : "F";
  result += scores.J >= scores.M ? "J" : "M";
  result += scores.A >= scores.N ? "A" : "N";

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
