// https://school.programmers.co.kr/learn/courses/30/lessons/12987

// 문제: A, B 팀중에 B팀이 A팀보다 큰 숫자를 내면 승점 얻음. 최대 승점 return
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let aIdx = 0;

  // B 배열을 하나씩 순회하면서 A 배열의 현재 인덱스보다 큰 숫자 찾기
  B.forEach((b) => {
    if (b > A[aIdx]) {
      answer++; // 승점 증가
      aIdx++; // 다음 인덱스로 이동시키기
    }
  });

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
