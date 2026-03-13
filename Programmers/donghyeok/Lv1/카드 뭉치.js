// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let i = 0; // cards1에서 사용할 위치
  let j = 0; // cards2에서 사용할 위치

  for (const word of goal) {
    if (i < cards1.length && cards1[i] === word) i++;
    else if (j < cards2.length && cards2[j] === word) j++;
    else return "No";
  }

  return "Yes";
}

// 다른 사람 풀이
function solution2(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) cards1.shift();
    else if (cards2[0] == s) cards2.shift();
    else return "No";
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ),
); // "Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ),
); // "No"
