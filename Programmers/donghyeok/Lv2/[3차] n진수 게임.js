// https://school.programmers.co.kr/learn/courses/30/lessons/17687

// n: 진법, t: 미리 구할 숫자의 개수, m: 게임에 참가하는 인원, p: 튜브(사람)의 순서
// 10 ~ 15 까지는 A ~ F로 표현
function solution(n, t, m, p) {
  let s = ""; // 문자열 저장
  let answer = ""; // 내가 말할 문자열
  let num = 0; // 10진수 숫자, 0 부터 시작
  const needLen = t * m; // 필요한 전체 문자열 길이

  // s에 해당 진법으로 바꿔서 추가하다 보면 넘어가기는 함, 그 즉시 바로 while문 종료
  while (s.length < needLen) {
    // toString(n) : n진법으로 변환
    // toUpperCase() : 대문자로 변환 -> 대문자로 변환시키는 이유는 10 ~ 15 까지는 A ~ F로 표현하기 위해서
    s += num.toString(n).toUpperCase();
    num++;
  }

  // 내가 말할 문자열 구하기
  // for문으로 내가 말할 t까지 4번 돌면서, answer에 내가 말할 문자열을 추가
  // s[p - 1 + i * m] -> p - 1은 배열 인덱스가 0부터 시작이라서
  for (let i = 0; i < t; i++) answer += s[p - 1 + i * m];

  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
