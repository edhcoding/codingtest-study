// https://school.programmers.co.kr/learn/courses/30/lessons/154539

// 뒷 큰수 찾고, 없다면 -1 리턴하도록 구현
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1); // 모든 값을 -1로 초기화
  const stack = []; // 인덱스를 저장할 스택

  // 뒤에서부터 순회
  for (let i = numbers.length - 1; i >= 0; i--) {
    // 스택이 비어있지 않고, 스택의 마지막값이 현재 값보다 작거나 같은지 확인 후 제거 (현재 값보다 작은 값들은 더 이상 뒷 큰수가 될 수 없음)
    while (stack.length > 0 && numbers[stack[stack.length - 1]] <= numbers[i]) {
      stack.pop();
    }

    // 스택에 값이 남아있으면 그게 뒷 큰수
    if (stack.length > 0) {
      answer[i] = numbers[stack[stack.length - 1]];
    }

    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
