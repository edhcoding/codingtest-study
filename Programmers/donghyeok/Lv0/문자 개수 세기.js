// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
  // A - 65, a - 97 (charCodeAt() 메서드 사용)
  return [...my_string].reduce(
    (p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p),
    Array(52).fill(0),
  );
}

// 다른 사람 풀이
function solution2(m) {
  var answer = [];
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
