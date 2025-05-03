// 보석 쇼핑 - https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const totalSize = new Set(gems).size; // gems 배열에서 보석 종류의 개수
  const gemMap = new Map(); // 구간 내에 보석이 몇 개씩 있는지 저장

  let answer = [0, gems.length - 1]; // 시작과 끝 구간 인덱스 배열
  let start = 0;
  let end = 0;

  gemMap.set(gems[0], 1); // 첫 번째 보석 추가, 개수 1 초기화

  // 두 포인터가 배열 범위 내에 있는 동안만 반복
  while (start < gems.length && end < gems.length) {
    // 구간 내에 모든 보석이 들어와 있을 경우 -> 기존 구간보다 더 짧을경우 구간 갱신, 보석 개수 감소, 0이면 삭제, 시작 포인터 증가
    if (gemMap.size === totalSize) {
      if (end - start < answer[1] - answer[0]) answer = [start, end];

      gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
      if (gemMap.get(gems[start]) === 0) gemMap.delete(gems[start]); // clear 메서드가 전부 삭제, delete 메서드는 키 값을 삭제
      start++;
    } else {
      // 구간 내에 모든 보석이 들어와 있지 않을 경우 -> end 포인터 증가, 새로운 보석 추가, 끝까지 도달한 경우 종료
      end++;
      if (end === gems.length) break;
      gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);
    }
  }

  // 구간 내에 모든 보석이 있고 최소 구간인 경우 -> 구간 배열에 + 1 반환
  return [answer[0] + 1, answer[1] + 1];
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
); // [3, 7]

console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1, 3]

console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1, 1]

console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1, 5]
