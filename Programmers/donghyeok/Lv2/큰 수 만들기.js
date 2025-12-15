// https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 문제: 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 return
// 해결: 스택을 사용해서 앞에서부터 작은 숫자를 제거
function solution(number, k) {
  const stack = [];

  for (let digit of number) {
    // 스택이 비어있지 않고, 제거하려는 k의 개수가 0보다 크고, 현재 숫자(digit)이 스택의 top보다 크면 - while문 실행
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < digit) {
      stack.pop(); // 기존 top 제거
      k--; // k의 개수 감소 (제거 했기 때문)
    }
    stack.push(digit); // 현재 숫자(digit)를 스택에 추가
  }

  // k가 남아있으면 뒤에서부터 제거 (예: "54321", k=2 → "543")
  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
