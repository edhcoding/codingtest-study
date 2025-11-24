// https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  const answer =
    s.length % 2 === 0 // 문자열이 짝수일 경우
      ? s[s.length / 2 - 1] + s[s.length / 2] // 문자열의 가운데 2개 글자 반환 (index 0부터 시작하기 때문에 -1 해줘야 함)
      : s[Math.floor(s.length / 2)]; // 홀수일 경우: 문자열의 가운데 1개 글자 반환
  return answer;
}

console.log(solution("abcde")); // "c"
console.log(solution("qwer")); // "we"
