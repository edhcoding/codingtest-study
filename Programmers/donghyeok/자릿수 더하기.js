function solution(n) {
  // 우선든 생각은 숫자로는 하나씩 쪼개고 더하고 할 수 없겠다는 생각에 문자열로 변경하려고 함
  // String(n) 으로 숫자를 문자열로 변환
  // split("") 으로 문자열을 하나씩 쪼개서 배열로 변환
  // reduce()로 배열의 각 요소를 더해줌

  return String(n)
    .split("")
    .reduce((acc, curr) => acc + curr);
}

solution(123); // 6
solution(987); // 24
