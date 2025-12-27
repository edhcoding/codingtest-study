// https://school.programmers.co.kr/learn/courses/30/lessons/152996

// 시소 짝꿍 몇 쌍 존재하는지 반환
function solution(weights) {
  const ratios = [1, 2 / 3, 3 / 4, 1 / 2]; // 시소 거리 비율
  const map = new Map();
  let answer = 0;

  weights.sort((a, b) => a - b);

  for (const w of weights) {
    for (const r of ratios) {
      const target = w * r; // 목표 몸무게

      // 이미 있다면 추가
      if (map.has(target)) {
        answer += map.get(target);
      }
    }
    map.set(w, (map.get(w) || 0) + 1); // 몸무게 추가, 존재하지 않으면 0 초기화
  }

  return answer;
}

console.log(solution([100, 180, 360, 100, 270])); // 4
