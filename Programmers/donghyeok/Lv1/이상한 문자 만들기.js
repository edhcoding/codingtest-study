// https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 실패 발생
function solution(s) {
  const a = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      a.push(s[i].toUpperCase());
    } else {
      a.push(s[i].toLowerCase());
    }
  }
  return a.join("");
}

// 재풀이
function solution2(s) {
  let strArr = s.split(" ");

  let wordTransArr = strArr.map((word) =>
    word
      .split("")
      .map((_, index) =>
        index % 2 == 0 ? word[index].toUpperCase() : word[index].toLowerCase(),
      )
      .join(""),
  );

  return wordTransArr.join(" ");
}

console.log(solution("try hello world"));
