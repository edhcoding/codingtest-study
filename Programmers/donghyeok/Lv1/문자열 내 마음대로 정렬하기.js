// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  // localeCompare : 문자열 비교 메서드
  // 기준문자열.localeCompare(비교할문자열)
  // 기준문자열이 비교할문자열보다 작으면 -1, 크면 1, 같으면 0
  const answer = strings.sort((a, b) => {
    if (a[n] === b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });

  return answer;
}

// 다른 사람 풀이
function solution2(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]),
  );
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
