// 핸드폰 번호 가리기 - https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  // repeat(): 메서드에 주어진 수만큼 반복해서 붙인 새로운 문자열을 반환
  const masked = "*".repeat(phone_number.length - 4);
  const lastFour = phone_number.slice(-4);

  return masked + lastFour;
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
